const { z } = require("zod")
const { verifyRecaptcha } = require("../shared/recaptcha")
const { sendMail } = require("../shared/mailer")
const {
  buildBookingAlertEmailHtml,
  buildBookingAckEmailHtml,
} = require("../shared/email-templates")
const { appendAuditLog } = require("../shared/audit-log")

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  day: z.string().min(1),
  time: z.string().min(1),
  timezone: z.string().optional(),
  recaptchaToken: z.string().optional(),
  faxNumber: z.string().optional(),
  website: z.string().optional(),
})

function getNotificationRecipients() {
  return (
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    process.env.CONTACT_EMAIL ||
    process.env.SMTP_USER ||
    "contact@azentyk.ai"
  )
}

module.exports = async function (context, req) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers }
    return
  }

  try {
    appendAuditLog("demo_request_received", {
      method: req.method,
      bodyKeys: Object.keys(req.body || {}),
    })

    const parsed = bookingSchema.safeParse(req.body)

    if (!parsed.success) {
      appendAuditLog("demo_validation_failed", {
        issues: parsed.error.issues,
      })
      context.res = {
        status: 422,
        headers,
        body: JSON.stringify({ error: "Invalid submission" }),
      }
      return
    }

    const data = parsed.data

    const honeypotValue = (data.faxNumber || data.website || "").trim()
    if (honeypotValue.length > 0) {
      appendAuditLog("demo_honeypot_triggered", {
        email: data.email,
        honeypotValue,
        ignoredInDev: process.env.NODE_ENV !== "production",
      })
      if (process.env.NODE_ENV === "production") {
        context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
        return
      }
    }

    const recaptcha = await verifyRecaptcha(data.recaptchaToken || "", "demo_booking")
    context.log("[Azentyk] reCAPTCHA score (demo):", recaptcha.score)

    if (!recaptcha.valid) {
      appendAuditLog("demo_recaptcha_rejected", {
        score: recaptcha.score,
        reason: recaptcha.reason,
        email: data.email,
      })
      context.res = {
        status: 400,
        headers,
        body: JSON.stringify({ error: "Submission failed" }),
      }
      return
    }

    const submittedAt = new Date().toISOString()
    const recipients = getNotificationRecipients()
    const internalSubject = `New Demo Booking - ${data.name} from ${data.organization}`
    const internalMailResult = await sendMail({
      to: recipients,
      replyTo: data.email,
      subject: internalSubject,
      html: buildBookingAlertEmailHtml(data, submittedAt),
    })

    context.log("[Azentyk] Demo booking notification result:", internalMailResult)
    appendAuditLog("demo_mail_sent", {
      recipients,
      replyTo: data.email,
      subject: internalSubject,
      mailResult: internalMailResult,
    })

    try {
      const firstName = String(data.name || "").split(" ")[0] || "there"
      const ackSubject = `We received your Azentyk demo request, ${firstName}`
      const ackMailResult = await sendMail({
        to: data.email,
        subject: ackSubject,
        html: buildBookingAckEmailHtml(data),
      })

      context.log("[Azentyk] Demo acknowledgement result:", ackMailResult)
      appendAuditLog("demo_ack_sent", {
        recipient: data.email,
        subject: ackSubject,
        mailResult: ackMailResult,
      })
    } catch (ackError) {
      context.log("[Azentyk] Demo acknowledgement failed:", ackError)
      appendAuditLog("demo_ack_failed", {
        recipient: data.email,
        message: ackError && ackError.message ? ackError.message : String(ackError),
      })
    }

    context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
  } catch (error) {
    context.log("[Azentyk] Demo booking error:", error)
    appendAuditLog("demo_error", {
      message: error && error.message ? error.message : String(error),
      stack: error && error.stack ? error.stack : undefined,
    })
    context.res = {
      status: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}

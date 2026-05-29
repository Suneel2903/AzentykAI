const { z } = require("zod")
const { verifyRecaptcha } = require("../shared/recaptcha")
const { sendMail } = require("../shared/mailer")
const {
  buildContactAlertEmailHtml,
  buildContactAckEmailHtml,
} = require("../shared/email-templates")
const { appendAuditLog } = require("../shared/audit-log")

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  role: z.string().optional(),
  visits: z.string().optional(),
  useCases: z.array(z.string()).optional(),
  message: z.string().optional(),
  preferredSlot: z.string().optional(),
  timezone: z.string().optional(),
  faxNumber: z.string().optional(),
  website: z.string().optional(),
  recaptchaToken: z.string().optional(),
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
    appendAuditLog("contact_request_received", {
      method: req.method,
      bodyKeys: Object.keys(req.body || {}),
    })

    const parsed = contactSchema.safeParse(req.body)

    if (!parsed.success) {
      appendAuditLog("contact_validation_failed", {
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
      appendAuditLog("contact_honeypot_triggered", {
        email: data.email,
        honeypotValue,
        ignoredInDev: process.env.NODE_ENV !== "production",
      })
      if (process.env.NODE_ENV === "production") {
        context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
        return
      }
    }

    const recaptcha = await verifyRecaptcha(data.recaptchaToken || "", "contact_form")
    context.log("[Azentyk] reCAPTCHA score (contact):", recaptcha.score)

    if (!recaptcha.valid) {
      appendAuditLog("contact_recaptcha_rejected", {
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

    const recipients = getNotificationRecipients()
    const internalSubject = `Demo Request - ${data.fullName} at ${data.company}${data.preferredSlot ? ` · ${data.preferredSlot}` : ""}`
    const internalMailResult = await sendMail({
      to: recipients,
      replyTo: data.email,
      subject: internalSubject,
      html: buildContactAlertEmailHtml(data),
    })

    context.log("[Azentyk] Contact lead notification result:", internalMailResult)
    appendAuditLog("contact_mail_sent", {
      recipients,
      replyTo: data.email,
      subject: internalSubject,
      mailResult: internalMailResult,
    })

    try {
      const firstName = String(data.fullName || "").split(" ")[0] || "there"
      const ackSubject = `We received your Azentyk request, ${firstName}`
      const ackMailResult = await sendMail({
        to: data.email,
        subject: ackSubject,
        html: buildContactAckEmailHtml(data),
      })

      context.log("[Azentyk] Contact acknowledgement result:", ackMailResult)
      appendAuditLog("contact_ack_sent", {
        recipient: data.email,
        subject: ackSubject,
        mailResult: ackMailResult,
      })
    } catch (ackError) {
      context.log("[Azentyk] Contact acknowledgement failed:", ackError)
      appendAuditLog("contact_ack_failed", {
        recipient: data.email,
        message: ackError && ackError.message ? ackError.message : String(ackError),
      })
    }

    context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
  } catch (error) {
    context.log("[Azentyk] Contact form error:", error)
    appendAuditLog("contact_error", {
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

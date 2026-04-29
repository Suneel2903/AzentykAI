const { z } = require("zod")
const { verifyRecaptcha } = require("../shared/recaptcha")
const { sendMail } = require("../shared/mailer")
const { buildBookingEmailHtml } = require("../shared/email-templates")

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  day: z.string().min(1),
  time: z.string().min(1),
  timezone: z.string().optional(),
  recaptchaToken: z.string().optional(),
  website: z.string().optional(),
})

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
    const parsed = bookingSchema.safeParse(req.body)

    if (!parsed.success) {
      context.res = {
        status: 422,
        headers,
        body: JSON.stringify({ error: "Invalid submission" }),
      }
      return
    }

    const data = parsed.data

    if (data.website && data.website.length > 0) {
      context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
      return
    }

    const recaptcha = await verifyRecaptcha(data.recaptchaToken || "", "demo_booking")
    context.log("[Azentyk] reCAPTCHA score (demo):", recaptcha.score)

    if (!recaptcha.valid) {
      context.res = {
        status: 400,
        headers,
        body: JSON.stringify({ error: "Submission failed" }),
      }
      return
    }

    await sendMail({
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.CONTACT_EMAIL || "contact@azentyk.ai",
      replyTo: data.email,
      subject: `New Demo Booking - ${data.name} from ${data.organization}`,
      html: buildBookingEmailHtml(data, new Date().toISOString()),
    })

    context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
  } catch (error) {
    context.log("[Azentyk] Demo booking error:", error)
    context.res = {
      status: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}

const { z } = require("zod")
const { verifyRecaptcha } = require("../shared/recaptcha")
const { sendMail } = require("../shared/mailer")
const { buildContactEmailHtml } = require("../shared/email-templates")

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
  website: z.string().optional(),
  recaptchaToken: z.string().optional(),
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
    const parsed = contactSchema.safeParse(req.body)

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

    const recaptcha = await verifyRecaptcha(data.recaptchaToken || "", "contact_form")
    context.log("[Azentyk] reCAPTCHA score (contact):", recaptcha.score)

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
      subject: `Demo Request - ${data.fullName} at ${data.company}${data.preferredSlot ? ` · ${data.preferredSlot}` : ""}`,
      html: buildContactEmailHtml(data),
    })

    context.res = { status: 200, headers, body: JSON.stringify({ success: true }) }
  } catch (error) {
    context.log("[Azentyk] Contact form error:", error)
    context.res = {
      status: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}

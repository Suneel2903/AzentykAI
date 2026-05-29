const nodemailer = require("nodemailer")

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    return null
  }

  const port = Number(process.env.SMTP_PORT) || 587
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

async function sendMail(options) {
  const transporter = getTransporter()

  if (!transporter) {
    console.log("[Azentyk] SMTP not configured - simulating send:", {
      to: options.to,
      subject: options.subject,
      replyTo: options.replyTo,
    })
    return { success: true, simulated: true }
  }

  const info = await transporter.sendMail({
    from: `"Azentyk.AI Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    ...options,
  })

  console.log("[Azentyk] SMTP send accepted:", {
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
    envelope: info.envelope,
    messageId: info.messageId,
  })

  return {
    success: true,
    simulated: false,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
    envelope: info.envelope,
    messageId: info.messageId,
  }
}

module.exports = { getTransporter, sendMail }

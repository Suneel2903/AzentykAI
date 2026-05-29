function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function renderShell({ badge, body, footerNote }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #04070F; color: #F8FAFC; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { background: linear-gradient(135deg, #00D4FF, #8B5CF6); padding: 2px; border-radius: 16px; margin-bottom: 32px; }
    .header-inner { background: #080D1A; border-radius: 14px; padding: 28px 32px; }
    .logo { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; color: #F8FAFC; }
    .logo span { background: linear-gradient(135deg, #00D4FF, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .badge { display: inline-block; background: rgba(0,212,255,0.12); border: 1px solid rgba(0,212,255,0.25); color: #00D4FF; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 12px; border-radius: 99px; margin-top: 8px; }
    .card { background: #080D1A; border: 1px solid #1E293B; border-radius: 12px; padding: 24px; margin-bottom: 16px; }
    .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #475569; margin-bottom: 16px; }
    .field { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; padding: 10px 0; border-bottom: 1px solid #1E293B; }
    .field:last-child { border-bottom: none; }
    .field-label { font-size: 13px; color: #94A3B8; min-width: 140px; }
    .field-value { font-size: 13px; color: #F8FAFC; font-weight: 500; text-align: right; max-width: 320px; }
    .slot-card { background: linear-gradient(135deg, rgba(0,212,255,0.08), rgba(139,92,246,0.08)); border: 1px solid rgba(0,212,255,0.2); border-radius: 10px; padding: 16px 20px; margin-bottom: 16px; }
    .slot-time { font-size: 18px; font-weight: 700; color: #00D4FF; }
    .slot-meta { font-size: 12px; color: #94A3B8; margin-top: 4px; }
    .message-box { background: #0D1426; border: 1px solid #1E293B; border-radius: 8px; padding: 16px; font-size: 13px; color: #94A3B8; line-height: 1.6; margin-top: 8px; }
    .body-copy { font-size: 15px; line-height: 1.7; color: #CBD5E1; margin: 0 0 16px; }
    .cta { display: inline-block; background: linear-gradient(135deg, #00D4FF, #8B5CF6); color: #04070F; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; margin-top: 20px; }
    .footer { text-align: center; margin-top: 32px; font-size: 12px; color: #475569; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="header-inner">
        <div class="logo">Azentyk<span>.AI</span></div>
        <div class="badge">${badge}</div>
      </div>
    </div>
    ${body}
    <div class="footer">
      Azentyk.AI &middot; contact@azentyk.ai &middot; Dallas, TX<br/>
      ${footerNote}
    </div>
  </div>
</body>
</html>
  `.trim()
}

function renderContactDetails(data) {
  return `
    <div class="card">
      <div class="section-label">Contact Details</div>
      <div class="field"><span class="field-label">Full Name</span><span class="field-value">${escapeHtml(data.fullName)}</span></div>
      <div class="field"><span class="field-label">Email</span><span class="field-value">${escapeHtml(data.email)}</span></div>
      <div class="field"><span class="field-label">Organization</span><span class="field-value">${escapeHtml(data.company)}</span></div>
      <div class="field"><span class="field-label">Role</span><span class="field-value">${escapeHtml(data.role || "-")}</span></div>
      <div class="field"><span class="field-label">Patient Visits/Month</span><span class="field-value">${escapeHtml(data.visits || "-")}</span></div>
      <div class="field"><span class="field-label">Use Cases</span><span class="field-value">${escapeHtml((data.useCases || []).join(", ") || "-")}</span></div>
    </div>
  `
}

function renderSlotCard(label, value, timezoneLabel) {
  if (!value) return ""
  return `
    <div class="card">
      <div class="section-label">${label}</div>
      <div class="slot-card">
        <div class="slot-time">${escapeHtml(value)}</div>
        <div class="slot-meta">30 min &middot; Video Call &middot; ${escapeHtml(timezoneLabel)}</div>
      </div>
    </div>
  `
}

function renderMessageBox(message) {
  if (!message) return ""
  return `
    <div class="card">
      <div class="section-label">Message</div>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>
  `
}

function buildContactAlertEmailHtml(data) {
  const timezoneLabel = data.timezone || "visitor timezone"
  const firstName = escapeHtml(String(data.fullName || "").split(" ")[0] || "Lead")

  return renderShell({
    badge: "New Demo Request",
    footerNote: "This internal alert was generated by the Azentyk website contact form.",
    body: `
      ${renderSlotCard("Preferred Demo Slot", data.preferredSlot, timezoneLabel)}
      ${renderContactDetails(data)}
      ${renderMessageBox(data.message)}
      <div style="text-align:center;">
        <a href="mailto:${escapeHtml(data.email)}" class="cta">Reply to ${firstName}</a>
      </div>
    `,
  })
}

function buildContactAckEmailHtml(data) {
  const timezoneLabel = data.timezone || "your local timezone"

  return renderShell({
    badge: "Request Received",
    footerNote: "This acknowledgement was sent to confirm that Azentyk received your request.",
    body: `
      <div class="card">
        <p class="body-copy">Hi ${escapeHtml(String(data.fullName || "").split(" ")[0] || "there")},</p>
        <p class="body-copy">Thanks for reaching out to Azentyk.AI. Our team has received your request and will review it shortly.</p>
        <p class="body-copy">If you selected a preferred demo slot, we will confirm that timing directly with you. Otherwise, someone from our team will follow up with next steps.</p>
      </div>
      ${renderSlotCard("Your Preferred Demo Slot", data.preferredSlot, timezoneLabel)}
      ${renderContactDetails(data)}
      ${renderMessageBox(data.message)}
    `,
  })
}

function renderBookingDetails(data, submittedAt) {
  return `
    <div class="card">
      <div class="section-label">Booking Details</div>
      <div class="field"><span class="field-label">Name</span><span class="field-value">${escapeHtml(data.name)}</span></div>
      <div class="field"><span class="field-label">Email</span><span class="field-value">${escapeHtml(data.email)}</span></div>
      <div class="field"><span class="field-label">Organization</span><span class="field-value">${escapeHtml(data.organization)}</span></div>
      <div class="field"><span class="field-label">Submitted At</span><span class="field-value">${escapeHtml(submittedAt)}</span></div>
    </div>
  `
}

function buildBookingAlertEmailHtml(data, submittedAt) {
  const timezoneLabel = data.timezone || "visitor timezone"

  return renderShell({
    badge: "New Demo Booking",
    footerNote: "This internal alert was generated by the Azentyk demo booking widget.",
    body: `
      ${renderSlotCard("Booked Slot", `${data.day} · ${data.time}`, timezoneLabel)}
      ${renderBookingDetails(data, submittedAt)}
    `,
  })
}

function buildBookingAckEmailHtml(data) {
  const timezoneLabel = data.timezone || "your local timezone"

  return renderShell({
    badge: "Booking Request Received",
    footerNote: "This acknowledgement was sent to confirm that Azentyk received your demo booking request.",
    body: `
      <div class="card">
        <p class="body-copy">Hi ${escapeHtml(String(data.name || "").split(" ")[0] || "there")},</p>
        <p class="body-copy">Thanks for booking a demo with Azentyk.AI. We have received your preferred slot and our team will confirm it with you shortly.</p>
      </div>
      ${renderSlotCard("Requested Slot", `${data.day} · ${data.time}`, timezoneLabel)}
      ${renderBookingDetails(data, new Date().toISOString())}
    `,
  })
}

module.exports = {
  buildContactAlertEmailHtml,
  buildContactAckEmailHtml,
  buildBookingAlertEmailHtml,
  buildBookingAckEmailHtml,
}

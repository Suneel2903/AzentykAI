const fs = require("fs")
const path = require("path")

const AUDIT_LOG_PATH = path.join(__dirname, "..", "lead-events.log")

function appendAuditLog(eventType, payload) {
  const entry = {
    timestamp: new Date().toISOString(),
    eventType,
    ...payload,
  }

  fs.appendFileSync(AUDIT_LOG_PATH, `${JSON.stringify(entry)}\n`, "utf8")
}

module.exports = { appendAuditLog, AUDIT_LOG_PATH }

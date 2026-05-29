const fs = require("fs")
const path = require("path")

const AUDIT_LOG_PATH = path.join(__dirname, "..", "lead-events.log")

function appendAuditLog(eventType, payload) {
  const entry = {
    timestamp: new Date().toISOString(),
    eventType,
    ...payload,
  }

  const line = `${JSON.stringify(entry)}\n`

  // Azure Functions production filesystems are not reliable for append-only
  // app logging. Fall back to stdout so requests do not 500 on write attempts.
  if (process.env.NODE_ENV === "production") {
    console.log("[Azentyk][audit]", line.trim())
    return
  }

  try {
    fs.appendFileSync(AUDIT_LOG_PATH, line, "utf8")
  } catch (error) {
    console.warn("[Azentyk][audit] Failed to write local audit log", {
      message: error && error.message ? error.message : String(error),
      path: AUDIT_LOG_PATH,
    })
    console.log("[Azentyk][audit]", line.trim())
  }
}

module.exports = { appendAuditLog, AUDIT_LOG_PATH }

async function verifyRecaptcha(token, expectedAction) {
  if (process.env.NODE_ENV !== "production") {
    console.warn("[Azentyk] Development mode - skipping reCAPTCHA verification")
    return { valid: true, score: 1 }
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn("[Azentyk] RECAPTCHA_SECRET_KEY not set - skipping verification")
    return { valid: true, score: 1 }
  }

  if (!token) {
    return { valid: false, score: 0, reason: "missing_token" }
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  })

  const data = await response.json()
  const score = data.score ?? 0
  const valid = data.success === true && data.action === expectedAction && score >= 0.7

  return {
    valid,
    score,
    reason: valid ? undefined : (data["error-codes"] || []).join(",") || "verification_failed",
  }
}

module.exports = { verifyRecaptcha }

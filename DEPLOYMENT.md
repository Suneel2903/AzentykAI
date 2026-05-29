# Azentyk SWA Deployment

Azure Static Web Apps production deploy requires these application settings.

Frontend build-time values:

- `NEXT_PUBLIC_SITE_URL=https://www.azentyk.ai`
- `NEXT_PUBLIC_CONTACT_EMAIL=<public contact mailbox>`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<Google reCAPTCHA v3 site key>`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=<Google Analytics GA4 measurement ID>`

Server-side values for Azure Functions:

- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=<client Gmail address>`
- `SMTP_PASSWORD=<client Gmail app password>`
- `SMTP_FROM=<same as SMTP_USER or desired sender>`
- `NEXT_PUBLIC_CONTACT_EMAIL=<recipient inbox>`
- `CONTACT_EMAIL=<optional server-only fallback recipient>`
- `RECAPTCHA_SECRET_KEY=<Google reCAPTCHA v3 secret key>`

Notes:

- `NEXT_PUBLIC_*` values are baked into the static build and require redeploy when changed.
- Function-only settings can be updated in Azure Portal without changing the static bundle.
- The frontend deploys from `out/`.
- Azure Functions deploy from `api/`.

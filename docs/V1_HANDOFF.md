# V1 Handoff Checklist

This document tracks the assets and information required from Suneel to finalize the V1 marketing site.

## 1. Brand Identity
- [ ] **Brand Name**: Replace `[SUNEEL_PROVIDES_BRAND_NAME]`
- [ ] **Logo**: Provide SVG/PNG logo files (light/dark modes)
- [ ] **One-Liner**: Replace `[SUNEEL_PROVIDES_ONE_LINER_VALUE_PROP]`

## 2. Product Assets (Screenshots)
Place these files in `public/product/`:
- [ ] `revenue.png` (Revenue Cycle Agent)
- [ ] `navigator.png` (Care Navigator)
- [ ] `scribe.png` (Clinical Scribe)
- [ ] `vigilance.png` (Vigilance)
- [ ] `priorauth.png` (Prior Auth)

## 3. Workflow Details
Update `src/content/agent-workflows.ts` with real steps:
- [ ] **Revenue Cycle**: Tagline, Outcome, Steps 1-4
- [ ] **Care Navigator**: Tagline, Outcome, Steps 1-4
- [ ] **Clinical Scribe**: Tagline, Outcome, Steps 1-4
- [ ] **Vigilance**: Tagline, Outcome, Steps 1-4
- [ ] **Prior Auth**: Tagline, Outcome, Steps 1-4

## 4. Metrics & Trust
Update `src/content/placeholders.ts`:
- [ ] **Metrics**: 3 key performance indicators (Label + Value)
- [ ] **Security**: Compliance posture text (No overclaims)
- [ ] **Customer Logos**: Provide filenames for `LOGOS` array

## 5. Integrations
- [ ] **Lead Capture**: Provide CRM endpoint or email destination in `src/app/api/lead/route.ts`

## 6. Deployment
- [ ] **Environment Variables**: Set `NEXT_PUBLIC_SITE_URL` in Vercel/Netlify

---

**Next Steps:**
1. Suneel provides assets.
2. Dev replaces placeholders.
3. Final review of "Agent Console" flows.
4. Deploy to production.

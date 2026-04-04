export interface UseCaseData {
  id: string
  number: string
  category: string
  badge: string
  name: string
  tagline: string
  problem: string
  agentActions: { step: string; description: string }[]
  outcomes: { label: string; before: string; after: string; metric: string }[]
  analytics: string[]
  videoLabel: string
  videoPlaceholderType: 'rcm' | 'prior-auth' | 'scheduling' | 'billing' | 'care-gap'
}

export const USE_CASES: UseCaseData[] = [
  {
    id: 'rcm-eligibility',
    number: '01',
    category: 'REVENUE CYCLE',
    badge: 'USE CASE 01  ·  REVENUE CYCLE',
    name: 'RCM Eligibility Verification',
    tagline: 'The 12-minute task that never needed a human.',
    problem: 'Front desk staff manually verify insurance for every patient visit — 12 minutes of IVR hold music, per patient, every day. One wrong code means a denied claim. One denied claim means 45 more minutes fixing it.',
    agentActions: [
      { step: '01', description: 'Calls payer IVR systems and APIs autonomously — no hold music, no waiting' },
      { step: '02', description: 'Extracts full benefits: copay, deductible, OOP max, network status, prior auth requirements' },
      { step: '03', description: 'Cross-references extracted data against appointment type and clinical coding' },
      { step: '04', description: 'Flags discrepancies, alerts only when escalation needed, updates patient record' },
    ],
    outcomes: [
      { label: 'Verification Time', before: '12 min', after: '90 sec', metric: '↓ 88%' },
      { label: 'Claim Denial Rate', before: '18%', after: '5%', metric: '↓ 72%' },
      { label: 'Clean Claim Rate', before: '71%', after: '94%', metric: '↑ 32%' },
    ],
    analytics: [ 'Verification success rate (%)', 'Average call duration vs. human baseline', 'Data extraction accuracy (field-level)', 'Downstream denial rate', 'Cost per verification', 'Turnaround time before appointment' ],
    videoLabel: 'Agent Demo: RCM Eligibility Verification',
    videoPlaceholderType: 'rcm',
  },
  {
    id: 'prior-auth',
    number: '02',
    category: 'CLINICAL OPERATIONS',
    badge: 'USE CASE 02  ·  CLINICAL OPERATIONS',
    name: 'Prior Authorization',
    tagline: 'The 7-day wait reduced to 4 hours.',
    problem: 'A doctor orders an MRI. The system flags: Prior Auth Required. And then a human waits 7–10 days, filling a 10-page form, while the patient delays treatment.',
    agentActions: [
      { step: '01', description: 'Detects the order the moment it is placed in the EHR' },
      { step: '02', description: 'Gathers 90 days of progress notes and lab results automatically' },
      { step: '03', description: 'Fills and submits payer-specific form via portal' },
      { step: '04', description: 'Tracks status and notifies team when approved' },
    ],
    outcomes: [
      { label: 'Turnaround Time', before: '7-10 days', after: '4 hours', metric: '↓ 95%' },
      { label: 'Cancellations', before: '22%', after: '8%', metric: '↓ 60%' },
      { label: 'Revenue Capture', before: '81%', after: '96%', metric: '↑ 18%' },
    ],
    analytics: [ 'Approval rate by payer', 'Time to submission', 'Document gathering success rate', 'Appeals win rate', 'Staff hours returned' ],
    videoLabel: 'Agent Demo: Prior Authorization',
    videoPlaceholderType: 'prior-auth',
  },
  {
    id: 'scheduling',
    number: '03',
    category: 'PATIENT ACCESS',
    badge: 'USE CASE 03  ·  PATIENT ACCESS',
    name: 'Appointment Scheduling',
    tagline: 'Zero missed calls. Even at 3 AM.',
    problem: 'It’s 11:47pm. A patient calls to book an urgent appointment. Four rings. Voicemail. Tomorrow, they book with your competitor.',
    agentActions: [
      { step: '01', description: 'Answers inbound calls 24/7, 365 — including nights and weekends' },
      { step: '02', description: 'Checks insurance eligibility and imaging prerequisites before booking' },
      { step: '03', description: 'Books multi-step journeys: X-ray at 9am, consult at 11am, one call' },
      { step: '04', description: 'Optimises waitlists to fill cancellation slots in real time' },
    ],
    outcomes: [
      { label: 'Missed Calls', before: '14%', after: '0%', metric: '↓ 100%' },
      { label: 'No-Show Rate', before: '18%', after: '13%', metric: '↓ 28%' },
      { label: 'After-Hours Bookings', before: '2%', after: '11%', metric: '↑ 340%' },
    ],
    analytics: [ 'Call answer rate', 'Self-serve booking percentage', 'After-hours conversion rate', 'Slot utilization', 'Cancellation backfill rate' ],
    videoLabel: 'Agent Demo: Intelligent Scheduling',
    videoPlaceholderType: 'scheduling',
  },
  {
    id: 'billing',
    number: '04',
    category: 'REVENUE RECOVERY',
    badge: 'USE CASE 04  ·  REVENUE RECOVERY',
    name: 'Billing & Collections',
    tagline: 'Patients pay when they understand the bill.',
    problem: 'Patients don’t pay bills they don’t understand. A $2,400 statement with 14 line items and zero context goes straight into a drawer. And stays there.',
    agentActions: [
      { step: '01', description: 'Calls patients about outstanding balances — in plain language' },
      { step: '02', description: 'Explains every charge, answers questions, removes confusion' },
      { step: '03', description: 'Offers and structures payment plans on the spot' },
      { step: '04', description: 'Processes secure payment within the call — escalates disputes' },
    ],
    outcomes: [
      { label: 'Bad Debt', before: '9%', after: '5%', metric: '↓ 44%' },
      { label: 'Collections', before: '58%', after: '76%', metric: '↑ 31%' },
      { label: 'Days in AR', before: '87', after: '28', metric: '↓ 68%' },
    ],
    analytics: [ 'Outbound connect rate', 'Payment plan adoption', 'Dispute resolution rate', 'Dollars collected per agent hour', 'Patient satisfaction score (CSAT)' ],
    videoLabel: 'Agent Demo: Billing Inquiry Call',
    videoPlaceholderType: 'billing',
  },
  {
    id: 'care-gap-closure',
    number: '05',
    category: 'VALUE-BASED CARE',
    badge: 'USE CASE 05  ·  VALUE-BASED CARE',
    name: 'Care Gap Closure & Preventive Outreach',
    tagline: 'Every missed screening is a quality score you left on the table.',
    problem: 'Missed screenings — mammograms, colonoscopies, A1c checks — silently erode your HEDIS scores and value-based reimbursements. Staff can\'t call thousands of patients. So the gaps just grow.',
    agentActions: [
      { step: '01', description: 'Scans EHR to identify patients with open care gaps by measure type' },
      { step: '02', description: 'Proactively calls patients — educates on the screening and why it matters' },
      { step: '03', description: 'Books the appointment during the call, checks insurance eligibility first' },
      { step: '04', description: 'Tracks completion and re-engages patients who cancel or no-show' },
    ],
    outcomes: [
      { label: 'Care Gap Closure', before: '38%', after: '74%', metric: '↑ 95%' },
      { label: 'HEDIS Scores', before: '3 Star', after: '4.5 Star', metric: '↑ 1.5 Stars' },
      { label: 'Quality Incentives', before: '$220K', after: '$580K', metric: '↑ 164%' },
    ],
    analytics: [ 'Care gap closure rate by measure', 'Patient engagement rate (call to action)', 'Scheduling conversion rate', 'Population coverage (%)', 'Quality measure improvement (HEDIS delta)', 'Revenue tied to quality incentives' ],
    videoLabel: 'Agent Demo: Care Gap Outreach',
    videoPlaceholderType: 'care-gap',
  }
];

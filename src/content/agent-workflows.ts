export type WorkflowPhase = "plan" | "act" | "verify" | "log";

export type WorkflowStep = {
    title: string;
    detail: string;
    phase: WorkflowPhase;
};

export type GovernanceItem = {
    type: "audit" | "approval" | "exception";
    label: string;
    status: "secure" | "pending" | "handled";
};

export type AgentWorkflow = {
    id: string;
    name: string;
    roleTitle: string;
    agency: string;
    tagline: string;
    outcome: string;
    trigger: string;
    steps: WorkflowStep[];
    governance: GovernanceItem[];
};

export const AGENT_WORKFLOWS: AgentWorkflow[] = [
    {
        id: "revenue",
        name: "Revenue Cycle Agent",
        roleTitle: "The Closer",
        agency: "reasons",
        tagline: "Accelerate payments and reduce denials with autonomous payer follow-up.",
        outcome: "Reduced A/R days and higher clean claim rate",
        trigger: "Claim denial received (Code CO-45)",
        steps: [
            { title: "Analyze Denial", detail: "Reading 835 ERA file and identifying denial reason code CO-45 (Exceeds timely filing).", phase: "plan" },
            { title: "Check Timeliness", detail: "Cross-referencing claim submission date against payer contract terms.", phase: "plan" },
            { title: "Locate Proof", detail: "Retrieving original electronic submission report (277CA) from clearinghouse logs.", phase: "act" },
            { title: "Generate Appeal", detail: "Drafting appeal letter citing timely filing proof.", phase: "act" },
            { title: "Portal Submission", detail: "Logging into payer portal and uploading appeal packet.", phase: "act" },
            { title: "Verify Receipt", detail: "Capturing portal confirmation number for audit trail.", phase: "verify" },
            { title: "Update EHR", detail: "Posting appeal status and tracking number back to patient account.", phase: "log" },
        ],
        governance: [
            { type: "audit", label: "Timeline evidence captured", status: "secure" },
            { type: "approval", label: "Appeal over $5k threshold checked", status: "secure" },
            { type: "exception", label: "Portal timeout (Auto-retry)", status: "handled" },
        ],
    },
    {
        id: "navigator",
        name: "Care Navigator",
        roleTitle: "The Concierge",
        agency: "orchestrates",
        tagline: "Patient scheduling, triage, and post-discharge follow-up.",
        outcome: "Improved adherence and reduced no-show rates",
        trigger: "Referral order received from PCP",
        steps: [
            { title: "Ingest Referral", detail: "Extracting patient data and diagnosis codes from incoming fax/referral.", phase: "plan" },
            { title: "Check Eligibility", detail: "Verifying insurance benefits and network status for specialist visit.", phase: "plan" },
            { title: "Patient Outreach", detail: "Initiating SMS/Call to patient to offer scheduling options.", phase: "act" },
            { title: "Negotiate Slot", detail: "Understanding patient preferences and finding best match in provider schedule.", phase: "act" },
            { title: "Book Appointment", detail: "Confirming slot in PMS and sending calendar invite to patient.", phase: "act" },
            { title: "Send Prep", detail: "Emailing intake forms and pre-visit instructions.", phase: "verify" },
            { title: "Log Interaction", detail: "Recording communication transcript in patient chart.", phase: "log" },
        ],
        governance: [
            { type: "audit", label: "Patient consent verified", status: "secure" },
            { type: "exception", label: "Patient unreachable (3x retry)", status: "handled" },
            { type: "approval", label: "Urgent triage flag", status: "pending" },
        ],
    },
    {
        id: "scribe",
        name: "Clinical Scribe",
        roleTitle: "The Ghostwriter",
        agency: "translates",
        tagline: "Ambient documentation that integrates directly into the EHR.",
        outcome: "Clinicians save 60-90 minutes per day",
        trigger: "Ambient listening session started",
        steps: [
            { title: "Listen & Transcribe", detail: "Real-time diarization of clinician-patient conversation.", phase: "plan" },
            { title: "Extract Facts", detail: "Identifying symptoms, medications, and diagnosis from natural language.", phase: "act" },
            { title: "Structure Note", detail: "Formatting data into SOAP note (Subjective, Objective, Assessment, Plan).", phase: "act" },
            { title: "Code Mapping", detail: "Suggesting ICD-10 and CPT codes based on documented clinical evidence.", phase: "act" },
            { title: "Review Orders", detail: "Drafting lab and prescription orders mentioned during visit.", phase: "act" },
            { title: "Clinician Review", detail: "Presenting draft note for final sign-off.", phase: "verify" },
            { title: "EHR Sync", detail: "Finalizing note and committing to patient record.", phase: "log" },
        ],
        governance: [
            { type: "audit", label: "PHI redaction check", status: "secure" },
            { type: "approval", label: "Clinician signature required", status: "pending" },
        ],
    },
    {
        id: "vigilance",
        name: "Vigilance Agent",
        roleTitle: "The Guardian",
        agency: "decides",
        tagline: "24/7 Remote Patient Monitoring and alert triage.",
        outcome: "Reduced readmissions through early intervention",
        trigger: "Vital sign anomaly detected",
        steps: [
            { title: "Receive Alert", detail: "Ingesting weight gain alert from connected scale (CHF protocol).", phase: "plan" },
            { title: "Analyze Trend", detail: "Comparing current reading against 30-day historical baseline.", phase: "plan" },
            { title: "Check Meds", detail: "Reviewing adherence log for diuretics.", phase: "plan" },
            { title: "Triage Severity", detail: "Determining risk level (Class II - Moderate).", phase: "act" },
            { title: "Patient Check-in", detail: "Automated call to assess symptoms (shortness of breath, swelling).", phase: "act" },
            { title: "Escalate to RN", detail: "Alerting care manager with summary and recommended action.", phase: "verify" },
            { title: "Log Event", detail: "Documenting alert and triage outcome in care management platform.", phase: "log" },
        ],
        governance: [
            { type: "audit", label: "Clinical protocol followed", status: "secure" },
            { type: "exception", label: "Device disconnect", status: "handled" },
        ],
    },
    {
        id: "priorauth",
        name: "Prior Auth Agent",
        roleTitle: "The Orchestrator",
        agency: "plans",
        tagline: "Automated approval requests and clinical packet assembly.",
        outcome: "Faster time-to-treatment for patients",
        trigger: "Procedure order placed",
        steps: [
            { title: "Detect Order", detail: "Monitoring EHR for new MRI order.", phase: "plan" },
            { title: "Check Requirements", detail: "Querying payer rules engine for specific plan requirements.", phase: "plan" },
            { title: "Compile Clinicals", detail: "Aggregating relevant progress notes and previous imaging results.", phase: "act" },
            { title: "Formulate Request", detail: "Completing specific payer prior auth form with clinical justification.", phase: "act" },
            { title: "Submit Request", detail: "Transmitting packet via electronic gateway / portal.", phase: "act" },
            { title: "Monitor Status", detail: "Polling for decision (Approved/Pending/Denied).", phase: "verify" },
            { title: "Update Order", detail: "Attaching auth number to procedure order in EHR.", phase: "log" },
        ],
        governance: [
            { type: "audit", label: "Criteria selection logged", status: "secure" },
            { type: "approval", label: "Peer-to-peer escalation", status: "pending" },
        ],
    },
];

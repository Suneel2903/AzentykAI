"use client";

import * as React from "react";
import { AGENT_WORKFLOWS, type WorkflowStep, type GovernanceItem } from "@/content/agent-workflows";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Calendar,
    FileText,
    ShieldAlert,
    FileCheck,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    ShieldCheck,
    AlertCircle,
    ScanEye
} from "lucide-react";

const ICONS = {
    revenue: LayoutDashboard,
    navigator: Calendar,
    scribe: FileText,
    vigilance: ShieldAlert,
    priorauth: FileCheck,
};

export default function AgentConsole() {
    const [activeWorkflowId, setActiveWorkflowId] = React.useState(AGENT_WORKFLOWS[0].id);
    const [activeStepIndex, setActiveStepIndex] = React.useState(0);
    const [isGovOpen, setIsGovOpen] = React.useState(false);

    const activeWorkflow = AGENT_WORKFLOWS.find((w) => w.id === activeWorkflowId) || AGENT_WORKFLOWS[0];

    const handleNext = () => {
        setActiveStepIndex((prev) => Math.min(prev + 1, activeWorkflow.steps.length - 1));
    };

    const handlePrev = () => {
        setActiveStepIndex((prev) => Math.max(prev - 1, 0));
    };

    // Reset step when workflow changes
    React.useEffect(() => {
        setActiveStepIndex(0);
        setIsGovOpen(false);
    }, [activeWorkflowId]);

    return (
        <div className="w-full max-w-[95%] mx-auto rounded-2xl bg-bg-900 border border-white/10 shadow-soft overflow-hidden flex flex-col md:flex-row min-h-[600px] md:h-[800px]">

            {/* Sidebar: Workflows */}
            <div className="md:w-64 bg-panel-900 border-r border-white/5 flex flex-col relative z-20">
                <div className="p-4 border-b border-white/5">
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Active Agents</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {AGENT_WORKFLOWS.map((workflow) => {
                        const Icon = ICONS[workflow.id as keyof typeof ICONS] || LayoutDashboard;
                        const isActive = activeWorkflowId === workflow.id;
                        return (
                            <button
                                key={workflow.id}
                                suppressHydrationWarning
                                onClick={() => setActiveWorkflowId(workflow.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all text-left group",
                                    isActive
                                        ? "bg-white/10 text-white shadow-glow"
                                        : "text-text-secondary hover:text-white hover:bg-white/5"
                                )}
                            >
                                <div className={cn("p-1.5 rounded-md transition-colors", isActive ? "bg-accent-cyan/10 text-accent-cyan" : "bg-white/5 text-text-muted group-hover:bg-white/10 group-hover:text-white")}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="leading-tight">{workflow.name}</div>
                                    <div className="text-[10px] text-text-muted/60 font-mono mt-0.5">{workflow.roleTitle}</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-bg-950 relative">

                {/* Header: L1 Summary */}
                <div className="p-6 border-b border-white/5 flex items-start justify-between bg-bg-900/50 backdrop-blur-md z-10 shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-xl font-bold text-white">{activeWorkflow.name}</h2>
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-text-muted border border-white/10">{activeWorkflow.agency}</span>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">{activeWorkflow.tagline}</p>

                        <div className="flex flex-wrap gap-4 text-xs">
                            <div className="flex items-center gap-1.5 text-accent-cyan bg-accent-cyan/5 px-2 py-1 rounded border border-accent-cyan/10">
                                <ScanEye className="w-3.5 h-3.5" />
                                <span className="font-semibold">Trigger:</span> {activeWorkflow.trigger}
                            </div>
                            <div className="flex items-center gap-1.5 text-accent-mint bg-accent-mint/5 px-2 py-1 rounded border border-accent-mint/10">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span className="font-semibold">Outcome:</span> {activeWorkflow.outcome}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                        <span className="text-[10px] font-mono font-bold text-accent-cyan tracking-wider">LIVE PREVIEW</span>
                    </div>
                </div>

                {/* L2: Steps Area */}
                <div className="flex-1 overflow-hidden relative flex flex-col">
                    <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar pb-32">
                        {activeWorkflow.steps.map((step, index) => (
                            <WorkflowStepItem
                                key={index}
                                step={step}
                                isActive={index === activeStepIndex}
                                isCompleted={index < activeStepIndex}
                                onClick={() => setActiveStepIndex(index)}
                            />
                        ))}
                    </div>

                    {/* L3: Governance Panel */}
                    <div className={cn(
                        "absolute bottom-0 left-0 right-0 bg-panel-900 border-t border-white/10 transition-all duration-300 z-30",
                        isGovOpen ? "h-64 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]" : "h-12 hover:bg-panel-800"
                    )}>
                        <button
                            suppressHydrationWarning
                            onClick={() => setIsGovOpen(!isGovOpen)}
                            className="w-full h-12 px-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-white transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-accent-violet" />
                                Governance & Log
                            </span>
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/60">
                                {isGovOpen ? "Hide Details" : "Show Details"}
                            </span>
                        </button>

                        {/* Panel Content */}
                        <div className="px-6 pb-6 pt-2 h-full overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Audit */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Audit Trail
                                </h4>
                                {activeWorkflow.governance.filter(g => g.type === 'audit').map((item, i) => (
                                    <GovernanceRow key={i} item={item} />
                                ))}
                            </div>
                            {/* Human in Loop */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" /> Human Review
                                </h4>
                                {activeWorkflow.governance.filter(g => g.type === 'approval').map((item, i) => (
                                    <GovernanceRow key={i} item={item} />
                                ))}
                            </div>
                            {/* Exceptions */}
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-coral" /> Exceptions
                                </h4>
                                {activeWorkflow.governance.filter(g => g.type === 'exception').map((item, i) => (
                                    <GovernanceRow key={i} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="p-4 border-t border-white/5 bg-panel-900 flex items-center justify-between z-40 relative">
                    <div className="text-xs text-text-muted">
                        Step {activeStepIndex + 1} of {activeWorkflow.steps.length} • {activeWorkflow.steps[activeStepIndex].phase.toUpperCase()} Phase
                    </div>
                    <div className="flex gap-2">
                        <button
                            suppressHydrationWarning
                            onClick={handlePrev}
                            disabled={activeStepIndex === 0}
                            className="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            suppressHydrationWarning
                            onClick={handleNext}
                            disabled={activeStepIndex === activeWorkflow.steps.length - 1}
                            className="p-2 rounded-lg bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {activeStepIndex === activeWorkflow.steps.length - 1 ? <CheckCircle2 className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkflowStepItem({ step, isActive, isCompleted, onClick }: { step: WorkflowStep, isActive: boolean, isCompleted: boolean, onClick: () => void }) {
    const isFuture = !isActive && !isCompleted;

    return (
        <div
            onClick={onClick}
            className={cn(
                "relative flex gap-4 transition-all duration-500 cursor-pointer group",
                isActive ? "opacity-100 scale-100" : isFuture ? "opacity-40" : "opacity-80"
            )}
        >
            {/* Connector Line */}
            <div className="absolute left-[11px] top-8 bottom-[-32px] w-[2px] bg-white/10 last:hidden" />

            {/* Icon Status */}
            <div className="relative z-10 mt-1">
                {isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-accent-cyan flex items-center justify-center shadow-[0_0_10px_rgba(57,230,214,0.4)]">
                        <CheckCircle2 className="w-4 h-4 text-black" />
                    </div>
                ) : isActive ? (
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-glow animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                ) : (
                    <div className="w-6 h-6 rounded-full border border-white/20 bg-bg-950 flex items-center justify-center group-hover:border-white/40 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={cn(
                "flex-1 p-4 rounded-xl border transition-all duration-300",
                isActive
                    ? "bg-white/5 border-white/10 shadow-soft"
                    : "bg-transparent border-transparent group-hover:bg-white/5"
            )}>
                <div className="flex items-center justify-between mb-1">
                    <span className={cn(
                        "text-[10px] font-bold font-mono uppercase px-1.5 py-0.5 rounded tracking-wide",
                        isActive ? "bg-accent-violet/20 text-accent-violet" : "text-text-muted bg-white/5"
                    )}>
                        {step.phase}
                    </span>
                </div>
                <h4 className={cn("font-medium text-sm", isActive ? "text-white" : "text-text-secondary")}>
                    {step.title}
                </h4>
                <p className={cn("text-sm mt-1 leading-relaxed", isActive ? "text-text-secondary" : "text-text-muted/50")}>
                    {step.detail}
                </p>
            </div>
        </div>
    );
}

function GovernanceRow({ item }: { item: GovernanceItem }) {
    let statusColor = "text-text-muted";
    let Icon = AlertCircle;

    if (item.status === 'secure') { statusColor = "text-accent-mint"; Icon = ShieldCheck; }
    if (item.status === 'pending') { statusColor = "text-accent-coral"; Icon = AlertCircle; }
    if (item.status === 'handled') { statusColor = "text-accent-cyan"; Icon = CheckCircle2; }

    return (
        <div className="flex items-start gap-2 text-xs p-2 rounded bg-white/5 border border-white/5">
            <Icon className={cn("w-3.5 h-3.5 mt-0.5", statusColor)} />
            <div>
                <div className="text-text-secondary font-medium">{item.label}</div>
                <div className={cn("text-[10px] bg-black/20 px-1 rounded inline-block mt-1", statusColor)}>{item.status}</div>
            </div>
        </div>
    );
}

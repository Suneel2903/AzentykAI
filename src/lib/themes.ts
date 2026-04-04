// CSS variable values per theme.
// Text color vars included so light themes can flip to dark text.

export interface ThemeVars {
  '--color-accent-primary': string
  '--color-accent-secondary': string
  '--color-accent-deep': string
  '--color-accent-violet': string
  '--color-accent-violet-deep': string
  '--color-accent-cyan': string
  '--color-bg-primary': string
  '--color-bg-secondary': string
  '--color-bg-tertiary': string
  '--color-bg-panel': string
  '--color-bg-900': string
  '--color-bg-950': string
  '--color-panel-900': string
  '--color-panel-800': string
  '--color-border-subtle': string
  '--color-border-default': string
  '--color-border-strong': string
  '--color-text-primary': string
  '--color-text-secondary': string
  '--color-text-muted': string
  '--color-text-inverse': string
}

export interface ThemeDef {
  name: string
  description: string
  preview: [string, string]
  vars: ThemeVars
}

export const themes: Record<string, ThemeDef> = {

  // ── 1: Cyber Teal (default dark) ─────────────────────
  cyberTeal: {
    name: 'Cyber Teal',
    description: 'Dark · Cyan + Violet',
    preview: ['#00D4FF', '#8B5CF6'],
    vars: {
      '--color-accent-primary':      '#00D4FF',
      '--color-accent-secondary':    '#33DDFF',
      '--color-accent-deep':         '#00AACF',
      '--color-accent-violet':       '#8B5CF6',
      '--color-accent-violet-deep':  '#6D28D9',
      '--color-accent-cyan':         '#00D4FF',
      '--color-bg-primary':          '#04070F',
      '--color-bg-secondary':        '#080D1A',
      '--color-bg-tertiary':         '#0D1426',
      '--color-bg-panel':            '#111827',
      '--color-bg-900':              '#0D1426',
      '--color-bg-950':              '#080D1A',
      '--color-panel-900':           '#111827',
      '--color-panel-800':           '#0F172A',
      '--color-border-subtle':       '#1E293B',
      '--color-border-default':      '#334155',
      '--color-border-strong':       '#64748B',
      '--color-text-primary':        '#F8FAFC',
      '--color-text-secondary':      '#94A3B8',
      '--color-text-muted':          '#475569',
      '--color-text-inverse':        '#0F172A',
    },
  },

  // ── 2: Growth Green (LIGHT, Kore.ai style) ───────────
  growthGreen: {
    name: 'Growth Green',
    description: 'Light · Emerald + Purple',
    preview: ['#059669', '#7C3AED'],
    vars: {
      '--color-accent-primary':      '#047857',
      '--color-accent-secondary':    '#059669',
      '--color-accent-deep':         '#065F46',
      '--color-accent-violet':       '#7C3AED',
      '--color-accent-violet-deep':  '#6D28D9',
      '--color-accent-cyan':         '#10B981',
      // Light backgrounds
      '--color-bg-primary':          '#F0FDF4',
      '--color-bg-secondary':        '#FFFFFF',
      '--color-bg-tertiary':         '#DCFCE7',
      '--color-bg-panel':            '#F0FDF4',
      // Keep these dark so AgentConsole stays readable
      '--color-bg-900':              '#0A1F18',
      '--color-bg-950':              '#061410',
      '--color-panel-900':           '#111827',
      '--color-panel-800':           '#0F172A',
      // Light borders
      '--color-border-subtle':       '#D1FAE5',
      '--color-border-default':      '#6EE7B7',
      '--color-border-strong':       '#10B981',
      // Dark text for light background
      '--color-text-primary':        '#0F172A',
      '--color-text-secondary':      '#374151',
      '--color-text-muted':          '#6B7280',
      '--color-text-inverse':        '#F8FAFC',
    },
  },
}

export type ThemeKey = keyof typeof themes
export const DEFAULT_THEME: ThemeKey = 'growthGreen'

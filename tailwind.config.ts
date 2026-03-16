import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                  primary:   '#04070F',
                  secondary: '#080D1A',
                  tertiary:  '#0D1426',
                  panel:     '#111827',
                },
                accent: {
                  primary:  '#00D4FF',
                  secondary:'#7C3AED',
                  success:  '#10B981',
                  warning:  '#F59E0B',
                  danger:   '#EF4444',
                },
                text: {
                  primary:   '#F8FAFC',
                  secondary: '#94A3B8',
                  muted:     '#475569',
                  inverse:   '#0F172A',
                },
                border: {
                  subtle: '#1E293B',
                  default:'#334155',
                  strong: '#64748B',
                },
            },
            boxShadow: {
                soft: "0 10px 35px rgba(0,0,0,0.35)",
                glow: "0 0 40px rgba(57,230,214,0.12)",
            },
            borderRadius: {
                xl2: "1.25rem",
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-in-right': {
                    '0%': { opacity: '0', transform: 'translateX(32px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'scale-in': {
                    '0%': { opacity: '0', transform: 'scale(0.92)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                'data-flow': {
                    '0%': { strokeDashoffset: '100' },
                    '100%': { strokeDashoffset: '0' },
                },
                'counter-up': {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'ping-slow': {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '75%, 100%': { transform: 'scale(1.8)', opacity: '0' },
                },
            },
            animation: {
                'fade-in-up':    'fade-in-up 0.6s ease-out forwards',
                'fade-in':       'fade-in 0.4s ease-out forwards',
                'slide-in-right':'slide-in-right 0.5s ease-out forwards',
                'scale-in':      'scale-in 0.5s ease-out forwards',
                'glow-pulse':    'glow-pulse 2.5s ease-in-out infinite',
                'data-flow':     'data-flow 1.5s linear infinite',
                'counter-up':    'counter-up 0.4s ease-out forwards',
                'ping-slow':     'ping-slow 2s cubic-bezier(0,0,0.2,1) infinite',
            },
        },
    },
    plugins: [],
} satisfies Config;

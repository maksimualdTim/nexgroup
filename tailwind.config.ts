import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: '#0E0E0E',
        accent: "#00EAFF"
      },
      spacing: {
        fluid: 'clamp(2rem, 2vw + 0.25rem, 4rem);',
        block: '6.25rem'
      },
      fontSize: {
        fluid: 'clamp(1rem, 1vw, 2rem)',
        title: 'clamp(2.5rem, 2vw + 0.25rem, 5rem)',
        subtitle: 'clamp(1rem, 1vw, 1.5rem)',
      },
      lineHeight: {
        title: 'clamp(2.5rem, 2vw + 0.25rem, 5rem)',
      }
    },
  },
  plugins: [],
} satisfies Config;

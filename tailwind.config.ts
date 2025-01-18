import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(form|input).js"
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
        fluid: 'calc(var(--fluid-spacing) * (1px + (100vw - 1530px) / 1530))',
        block: 'calc(80 * (1px + (100vw - 1530px) / 1530))'
      },
      fontSize: {
        fluid: 'calc(var(--fluid-font-size) * (1px + (100vw - 1530px) / 1530))',
        title: 'calc(40 * (1px + (100vw - 1530px) / 1530))',
        subtitle: 'calc(16 * (1px + (100vw - 1530px) / 1530))',
      },
      lineHeight: {
        title: 'calc(40 * (1px + (100vw - 1530px) / 1530))',
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;

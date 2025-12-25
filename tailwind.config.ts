import type { Config } from "tailwindcss";

const config: Config = {
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
        steel: {
          50: '#f0f7f9',
          100: '#d9edf2',
          200: '#b7dce6',
          300: '#85c3d4',
          400: '#4a9fb9',
          500: '#4A90A4',
          600: '#3a7a8e',
          700: '#336475',
        },
        amber: {
          400: '#fbbf24',
          500: '#F5A623',
          600: '#d4900e',
        },
        charcoal: '#1A1A2E',
        slate: {
          200: '#C4C4D4',
          400: '#8888A0',
          600: '#4A4A5A',
        },
        'warm-white': '#FAF9F7',
        success: '#27AE60',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

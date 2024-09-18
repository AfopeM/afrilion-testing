import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        light: "#fdfeff",
        // primary: "#c6e2f8",
        // primary: "#6de3e7",
        primary: "#90e3e5",
        secondary: "#1f2a47",
        // dark: "#343D4D",
        dark: "#0b2323",
        background: "#eff5f7",
      },
    },
  },
  plugins: [],
};
export default config;

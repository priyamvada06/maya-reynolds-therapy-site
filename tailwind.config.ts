import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#24352f",
        sage: "#73877a",
        cream: "#f7f5ef",
        sand: "#e9e3d8",
        terracotta: "#b66e54"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(36, 53, 47, 0.08)"
      }
    }
  },
  plugins: []
};
export default config;

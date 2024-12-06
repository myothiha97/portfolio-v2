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
        primary: "#fffce1",
        secondary: "#OEOFOF",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;

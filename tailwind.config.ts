import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "6xl": ["3.75rem", "1.1"],
        "5xl": ["3rem", "1.2"],
        "4xl": ["2.25rem", "2.8rem"],
      },
      colors: {
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
export default config;

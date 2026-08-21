import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#58111A",
          maroonDark: "#3E0B12",
          teal: "#1D8A8A",
          tealLight: "#E6F4F4",
          gold: "#D4AF37",
          goldLight: "#FDF8EA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
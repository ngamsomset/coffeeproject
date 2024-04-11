import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    colors: {
      question: "#E6CCB2",
      button: "#36402D",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('../public/images/cafe_street.jpg')",
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "30": "0.3",
        "40": "0.4",
        "50": "0.5",
        "60": "0.6",
        "70": "0.7",
        "78": "0.78",
        "80": "0.8",
        "90": "0.9",
        "100": "1.0",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;

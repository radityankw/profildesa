import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F7EF",
        ink: "#1C2B22",
        sawah: {
          DEFAULT: "#2F5233",
          light: "#3E6B45",
          dark: "#1E3A22",
        },
        gold: {
          DEFAULT: "#C9971F",
          light: "#E4B94A",
        },
        maroon: "#7A2436",
        line: "#DAD9C8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(28,43,34,0.06) 1px, transparent 0)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;

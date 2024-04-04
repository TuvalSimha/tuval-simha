/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "loop-scroll": "loop-scroll 30s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    extend: {
      colors: {
        primary: "#0070f3",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "100rem",
        sm: "200rem",
        lg: "400rem",
        xl: "500rem",
        "2xl": "600rem",
      },
    },
  },
  plugins: [],
};

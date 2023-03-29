/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#f1f5f9",
          200: "#cbd5e1",
          300: "#64748b",
        },
        dark: {
          100: "#334155",
          200: "#1e293b",
          300: "#0f172a",
        },
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};

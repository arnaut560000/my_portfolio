/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d6a066",
        accent: "#7dd3fc",
        dark: "#09090b",
        softdark: "#111216",
        borderdark: "#20232b",
        panel: "#12141a"
      },
      fontFamily: {
        sans: ["Bahnschrift", "Segoe UI Variable", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.45)",
        beam: "0 0 40px rgba(214, 160, 102, 0.16)"
      }
    }
  },
  plugins: []
};

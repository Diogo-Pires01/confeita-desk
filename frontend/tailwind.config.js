/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#2ec4b6",
        background: "#cbf3f0",
        surface: "#FFFFFF",
        border: "#E5E7EB",

        text: {
          main: "#1F2937",
          soft: "#6B7280",
        },

        status: {
          producao: "#FACC15",
          pronto: "#3B82F6",
          entregue: "#22C55E",
          cancelado: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};

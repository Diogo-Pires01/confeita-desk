/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        accent: "#5eead4",

        // Landing & Login (escuro)
        bg: {
          DEFAULT: "#0a0f0d",
          card: "rgba(255,255,255,0.05)",
          hover: "rgba(255,255,255,0.08)",
        },

        // Dashboard (claro)
        dash: {
          bg: "#f1f5f3",
          surface: "#ffffff",
          card: "#f8faf9",
          hover: "#e8f0ec",
          border: "#dce5e0",
        },

        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          light: "rgba(255,255,255,0.12)",
        },

        // Textos escuros (Landing/Login)
        text: {
          main: "#e8f5ef",
          soft: "#8fbbaa",
          muted: "#5a8a78",
        },

        // Textos claros (Dashboard)
        "dash-text": {
          main: "#1a2e25",
          soft: "#4b6358",
          muted: "#8a9e94",
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

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "conexco-blue": "#168BE5",
        "conexco-green": "#4CAF50",
        "conexco-navy": "#0D182A",
        "conexco-gray": "#F2F4F7",
        "conexco-white": "#FFFFFF",
        "conexco-navy-light": "#132038",
        "conexco-navy-lighter": "#1A2A45",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(13, 24, 42, 0.25)",
        card: "0 10px 30px -12px rgba(13, 24, 42, 0.15)",
        glow: "0 0 40px rgba(22, 139, 229, 0.25)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "drift-1": "drift1 22s ease-in-out infinite",
        "drift-2": "drift2 26s ease-in-out infinite",
        "drift-3": "drift3 19s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, 8%) scale(1.12)" },
          "66%": { transform: "translate(-4%, 5%) scale(0.95)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%": { transform: "translate(-7%, -6%) scale(1.08)" },
          "75%": { transform: "translate(5%, -3%) scale(0.92)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, -8%) scale(1.15)" },
        },
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(22,139,229,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(76,175,80,0.12), transparent 35%)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        navy: "var(--navy)",
        navy2: "var(--navy-2)",
        gold: "var(--gold)",
        ivory: "var(--ivory)",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(9, 24, 48, 0.35)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(1200px 600px at 10% 10%, rgba(201, 162, 39, 0.12), transparent 60%), radial-gradient(800px 500px at 90% 20%, rgba(255, 255, 255, 0.08), transparent 60%)",
        "mesh": "radial-gradient(circle at 20% 20%, rgba(201, 162, 39, 0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.08), transparent 35%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 90% 80%, rgba(201, 162, 39, 0.08), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        ticker: "ticker 18s linear infinite",
        reveal: "reveal 800ms ease forwards",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

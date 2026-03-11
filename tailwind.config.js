/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#020819",
          900: "#06102a",
          850: "#0a1530",
          800: "#0f1b3a",
        },
        neon: {
          cyan: "#65d9ff",
          blue: "#4a8cff",
          teal: "#4cf3d9",
          violet: "#8b86ff",
        },
      },
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(101, 217, 255, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 15% 20%, rgba(101, 217, 255, 0.23) 0%, transparent 45%), radial-gradient(circle at 80% 10%, rgba(74, 140, 255, 0.2) 0%, transparent 38%), radial-gradient(circle at 65% 80%, rgba(76, 243, 217, 0.14) 0%, transparent 42%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

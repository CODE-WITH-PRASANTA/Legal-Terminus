/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        modalIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(16px) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease-out",
        modalIn: "modalIn 260ms cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

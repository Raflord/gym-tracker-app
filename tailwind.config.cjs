/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dumbell: "url('../assets/dumbell.jpg')",
        barbell: "url('../assets/barbell.jpg')",
        barbell2: "url('../assets/barbell_2.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dumbell: "url('../assets/images/dumbell.jpg')",
        barbell: "url('../assets/images/barbell.jpg')",
        barbell2: "url('../assets/images/barbell_2.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

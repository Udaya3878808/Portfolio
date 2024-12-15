/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor:{
        "primary" : "#2b2b72",
      "secondary" : "rgb(85 81 227)",
      }
    },
    fontFamily:{
      "hero-font" : "sriracha"

    }
  },
  plugins: [],
};

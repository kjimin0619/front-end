/** @type {import('tailwindcss').Config} */

const customBorder = {
  3: "3px",
  5: "5px",
  custom: "10rem",
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: customBorder,
    },
  },
  plugins: [],
};

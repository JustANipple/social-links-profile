/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./assets/**/*.css"],
  theme: {
    extend: {
      fontFamily: {
        e_inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        e_sm: "0.875rem",
      },
      fontWeight: {
        e_normal: 400,
        e_semibold: 600,
        e_bold: 700,
      },
      colors: {
        e_green: "#c5f82a",
        e_white: "#ffffff",
        e_grey700: "#333333",
        e_grey800: "#1f1f1f",
        e_grey900: "#141414",
      },
    },
  },
  plugins: [],
};

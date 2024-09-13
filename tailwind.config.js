/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(158, 36%, 37%)", // Dark cyan
        "primary-dark": "#1A4031",
        background: "hsl(30, 38%, 92%)", // Cream
        foreground: "hsl(212, 21%, 14%)", // Very dark blue
        muted: "hsl(228, 12%, 48%)", // Dark grayish blue
        white: "hsl(0, 0%, 100%)", // White
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      fontSize: {
        body: "14px",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};

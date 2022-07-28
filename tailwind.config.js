const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,tsx,jsx,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
})

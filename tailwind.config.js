/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      colors: {
        milk: "#F5F5F5",
        darker: "#515151",
      },
    },
  },
  plugins: [],
};

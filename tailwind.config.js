/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "50%": "50%",
        "35%": "35%",
        "10%": "10%",
        "90%": "90%",
        "200px": "200px",
        "100vh": "100vh",
        "40vh": "40vh",
        "200vh": "200vh",
        "200vw": "200vw",
        "500vh": "500vh",
        "100vw": "100vw",
        "120vw": "120vw",
        "50vh": "50vh",
        "45vh": "45vh",
        "25vh": "25vh",
        "300px": "300px",
      },
      transitionProperty: {
        text: "font-size",
      },
    },
  },
  plugins: [],
};

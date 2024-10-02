/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "lg-mobile": { max: "640px" },
      },
    },
  },
  plugins: [require("daisyui")],
};

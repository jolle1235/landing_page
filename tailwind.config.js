/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // text colors
        lightgreyAppColor: "#8D8D92",
        darkgreyAppColor: "#A7A7A7",

        // action color
        action: "#2CB944",
        secondary: "#D1FADA",
        actionHover: "#4CD964",
        secondaryHover: "#4CD964",
        warningSecondary: "#FFCE51",
        warning: "#F0AC00",
        warningHover: "#FFBA08",
        cancel: "#FF2B2B",
        cancelHover: "#FF4B4B",
      },
    },
  },
  plugins: [],
};

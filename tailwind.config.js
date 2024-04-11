/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xss: "10px",
      },
      colors: {
        primary: {
          base: "#FE7E41",
          light: "#FAF5EF",
          deepLight: "#F9EBDB",
          darker: "#110804",
          dark: "#110804",
        },
        secondary: {
          heading: "#110804",
          paragraph: "#4b423e",
          paragraphLight: "#897c96",
          paragraphThin: "#A89F94",
          thin: "#C5B7A7",
          thin2: "#DDD3CE",
          thin3: "#C5B7A7",
        },
        other: {
          green: "#5BC18F",
          yellow: "#61594F",
          light1: "#D8D0C7",
          light2: "#DFD8CE",
          light3: "#E7DFD7",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        // Add other font families if needed
      },
    },
  },
  plugins: [],
};

const plugin = require("tailwindcss/plugin");
const { heroui } = require("@heroui/react");

const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".capitalize-first:first-letter": {
      textTransform: "uppercase",
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        concentric:
          "0 0 0 10px rgba(81, 23, 175, 0.4), 0 0 0 20px rgba(81, 23, 175, 0.4), 0 0 0 25.5px rgba(81, 23, 175, 0.3)",
      },
      colors: {
        primary: "#5117AF",
        secondary: "#F3D117",
        tertiary: "#00CCFF",
      },
      fontSize: {
        md: "0.9375rem",
        "4.5xl": "2.75rem",
        "6.5xl": "4rem",
      },
      padding: {
        pg: "5%",
        header: "var(--header)",
        "sm-header": "var(--sm-header)",
      },
      height: {
        header: "var(--header)",
        "sm-header": "var(--sm-header)",
      },
      aspectRatio: {
        "3/4": "3 / 3.2",
        "4/3": "4 / 3",
        "5/3": "5 / 3",
      },
      screens: {
        "4kScreen": "2000px"
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), capitalizeFirst],
};

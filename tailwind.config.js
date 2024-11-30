/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      white: "#fff",

      blue: {
        100: "#AEE0FF", // Lighter shade
        200: "#7CCBFF",
        300: "#4AB6FF",
        400: "#28A0FF",
        500: "#1fb6ff", // Main color
        600: "#1A9AE6", // Darker shade
        700: "#1585CC",
        800: "#116F99",
        900: "#0D5977", // Darkest shade
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: {
        100: "#f7fafc",
        900: "#1a202c",
      },
      "gray-light": "#d3dce6",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    spacing: {
      0: "0px",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      20: "80px",
      24: "96px",
      28: "112px",
      32: "128px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      96: "384px",
    },

    borderRadius: {
      "4xl": "2rem",
    },

    plugins: [],
  },
};

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mon: ["Montserrat", "sans-serif"],
      heb: ["Heebo", "sans-serif"],
      pop: ["Poppins", "sans-serif"],
    },
    colors: {
      transparent: {
        DEFAULT: "transparent",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      black: {
        DEFAULT: "#000000",
      },
      gray: {
        cA9A9A9: "#A9A9A9",
        cE0E0E0: "#E0E0E0",
        cF2F2F2: "#F2F2F2",
        c333333: "#333333",
        c4F4F4F: "#4F4F4F",
        c828282: "#828282",
        cBDBDBD: "#BDBDBD",
      },
      red: {
        cEB5757: "#EB5757",
        cEA8282: "#EA8282",
      },
      green: {
        c27AE60: "#27AE60",
        c60BF88: "#60BF88",
      },
      blue: {
        c2D9CDB: "#2D9CDB",
        c100E1D: "#100E1D",
        c2F527B: "#2F527B",
        c1D355D: "#1D355D",
      },
      purple: {
        c6066D0: "#6066D0",
      },
      orange: {
        cF9A826: "#F9A826",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/background.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

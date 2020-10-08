const colors = require("./src/colors").colors;

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: colors,
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      margin: {
        "-96": "-24rem",
        "-152": "-38rem",
      },
    },
  },
  variants: {},
  plugins: [],
};

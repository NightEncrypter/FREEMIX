module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  // theme: {
  //   extend: {},
  // },
  variants: {},
  plugins: [],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        iron_man: "url('./images/Iron.jpg')",
        jenny: "url('./images/p1.jpg')",
        musify: "url('./images/musify.jpg')",
        m5: "url('./images/m5.jpg')",
      }),
      // background: (theme) => ({
      //   lightblack: "rgba(0,0,0,0.2)",
      // }),
    },
  },
};

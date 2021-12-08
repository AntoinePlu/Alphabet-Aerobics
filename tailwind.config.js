module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.js",
    "./lib/**/*.js",
    "./components/**/*.js",
    "./layouts/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "trump-gothic": ["Trump Gothic"],
        inter: ["Inter"],
      },
      spacing: {
        "2px": "2px",
      },
      minWidth: {
        8: "2rem",
      },
    },
    colors: {
      transparent: "rgba(255, 255, 255, 0)",
      black: "#111111",
      gray: {
        dark: "#1f2022",
        mid: "#202020",
        highlight: "#4e5055",
        light: "#c4c4c4",
      },
      white: {
        4: "rgba(255, 255, 255, 0.04)",
        10: "rgba(255, 255, 255, 0.1)",
        60: "rgba(255, 255, 255, 0.6)",
        80: "rgba(255, 255, 255, 0.8)",
        100: "#ffffff",
      },
      yellow: "#ffac30",
      orange: "#df5b22",
      purple: "#8c35fb",
    },
    screens: {
      lg: "940px",
      xl: "1140px",
      "2xl": "1440px",
    },
  },
};

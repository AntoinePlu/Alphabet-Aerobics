module.exports = {
  content: [
    "./pages/**/*.js",
    "./lib/**/*.js",
    "./components/**/*.{js,yml}",
    "./layouts/**/*.js",
  ],
  theme: {
    extend: {
      opacity: {
        1: ".01",
        2: ".02",
        4: ".04",
        10: ".1",
        24: ".24",
        40: ".4",
        56: ".56",
        60: ".6",
        80: ".8",
      },
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
        mid: "#2c2d2e",
        highlight: "#4e5055",
        light: "#c4c4c4",
      },
      red: "#de544f",
      green: "#0fa958",
      white: "#ffffff",
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

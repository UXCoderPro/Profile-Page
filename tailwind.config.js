module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        amiri: ['"Amiri"', "serif"],
        publicSans: ['"Public Sans"', "sans-serif"],
      },
      colors: {
        border: "#323337",
        font: "#191919",
        box: "#1F2024",
        shade: "#4F5052",
        textShade: "#737373",
        greeny: "#1BC71B",
        greenLight: "rgba(27,199,27,0.20)",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(94deg,#A2F66E 0%,#B6F957 100%)",
      },
    },
  },
  plugins: [],
};

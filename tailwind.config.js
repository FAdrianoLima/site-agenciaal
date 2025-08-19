module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#28B3C7",
      },
      zIndex: { 9999: "9999" },
    },
    fontFamily: {
      body: ['Roboto'],
    },
  },
  plugins: [],
};

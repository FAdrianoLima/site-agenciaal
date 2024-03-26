module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#322783",
        secondary: "#29D66C",
      },
      zIndex: { 9999: "9999" },
    },
    fontFamily: {
      body: ['Montserrat'],
    },
  },
  plugins: [],
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          secondaryColor:{
            DEFAULT:"#535353",
            dark:"#433437"
          },
          primaryColor:{
            DEFAULT:"#f2274f",
            dark:"#931029"
          }
      },
      fontFamily:{
        "slab":['Slabo 27px', "serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

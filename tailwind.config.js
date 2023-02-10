module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.ts"],
  },
  theme: {
    extend: {
      fontFamily : {
        sans : ['Rubik', 'sans-serif'],
      },
      // spacing : {
      //   "18" : "4.5rem",
      // }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
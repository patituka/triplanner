module.exports = {
  content: [
    "./src/**/*.{html, js, ts, tsx}",
    "./src/**/*"
  ], theme: {
    extend: {
      extend: {
        backgroundImage: theme => ({
          'home': "url('src/images/lac.jpg')",
        })
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
  ],
}

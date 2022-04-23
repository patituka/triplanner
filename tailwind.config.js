module.exports = {
  content: [
    "./src/**/*.{html, js, ts, tsx}",
    "./src/**/*"
  ], theme: {
    extend: {
      extend: {
        backgroundImage: theme => ({
          'bg-banner': "url('./images/banner-md.jpg')",
        })
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('@tailwindcss/forms'),
  ],
}

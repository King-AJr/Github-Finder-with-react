module.exports = {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
      ],
    darkMode: true, // or 'media' or 'class'
    daisyui: {
        themes: ["cupcake", "dark", "cmyk"],
      },
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }
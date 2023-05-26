/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      meli: {
        primary: '#ffe600',
        secondary: '#3483fa',
      },
      gray: {
        500: '#333333',
        400: '#666666',
        300: '#999999',
        200: '#eeeeee',
      },
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
}


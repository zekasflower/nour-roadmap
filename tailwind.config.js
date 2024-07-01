/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C40C6',
        light: '#D2DAE2',
        'mid-dark': '#485460',
        'mid-gray': '#808E9B',
      },
      fontFamily: {
        cairo: ['Cairo'],
        nabla: ['Nabla'],
        babylonica: ['Babylonica'],
        aref: ['Aref Ruqaa'],
      },
    },
  },
  plugins: [],
}


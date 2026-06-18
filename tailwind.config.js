/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1b3a5b',
          mid:     '#2c5f8a',
          pale:    '#eef4fb',
          dark:    '#12283f',
        },
        teal: {
          DEFAULT: '#4a7c6b',
          pale:    '#edf4f1',
        },
        bg:   '#f8f7f4',
        card: '#ffffff',
        ink:  '#1a1d21',
        soft: '#3d434b',
        muted:'#7a818c',
        rule: '#dde1e7',
      },
    },
  },
  plugins: [],
}

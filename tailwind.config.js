/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a',
        text: '#f5f5f5',
        accent: {
          DEFAULT: '#ff6b35',
          orange: '#ff6b35',
        },
      },
      fontFamily: {
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}


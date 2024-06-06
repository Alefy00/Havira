/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Habilita o dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A6FFCB',
          DEFAULT: '#FF6F6F',
          dark: '#B23B3B',
        },
        secondary: {
          light: '#A6FFCB',
          DEFAULT: '#4ECCA3',
          dark: '#2E8B57',
        },
        accent: '#FFD700',
        'light-background': '#F3F4F6',
        'light-surface': '#FFFFFF',
        'light-text': '#1F2937',
        'dark-background': '#121212',
        'dark-surface': '#1F1F1F',
        'dark-text': '#E5E7EB',
        'secondary-dark': '#4ECCA3',
      },
    },
  },
  plugins: [],
}

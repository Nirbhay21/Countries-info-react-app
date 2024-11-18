/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,jsx}",
    "./components/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",

        "dark-primary": "var(--bg-dark-primary)",
        "dark-secondary": "var(--bg-dark-secondary)",
        "dark-text-primary": "var(--dark-text-primary)",
        "dark-text-secondary": "var(--dark-text-secondary)",
      },
      boxShadow: {
        "light-blur": "0px 0px 8px 0px var(--light-box-shadow)",
        "dark-blur": "0px 0px 6px 0px var(--dark-box-shadow)",

        "dark-blur-bottom": "0px 1px 6px 0px var(--dark-box-shadow)",
        "light-blur-bottom": "0px 1px 6px 0px var(--light-box-shadow)",
      }
    },
  },
  plugins: [],
}
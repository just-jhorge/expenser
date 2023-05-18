/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
				sm: "5rem",
				lg: "8rem",
				xl: "12rem",
				"2xl": "15rem",
      }
    },
    extend: {
      width: {
        '6/7': '85%'
      }
    },
  },
  plugins: [],
}

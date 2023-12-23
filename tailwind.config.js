/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryColor: "#10274A",
      secondaryColor: "#FF6338",
      tertiaryColor: "#F3AB38",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      blue: colors.blue,
      orange: colors.orange,
      amber: colors.amber,
      red: colors.red,
      sky: colors.sky,
      slate: colors.slate,
      green: colors.green,
      red: colors.red,
    },

    extend: {
      fontFamily: {
        default: ['var(--font-inter)'],
        text: ['var(--font-quicksand)'],
        cifra: ['var(--font-roboto)'],
        highlight: ['var(--font-barlow)'],
        monospace: ['var(--font-robotomono)', 'monospace']
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

}
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        foregroundPrimary: 'var(--color-foreground-primary)',
        foregroundSecondary: 'var(--color-foreground-secondary)',
      },
      fontFamily: {
        sans: [
          // "Urbanist",
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      screens: {
        mdLg: { raw: '(min-width: 1000px)' },
      },

      // screens: {
      //   mdLg: '1000px',
      // },
    },
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

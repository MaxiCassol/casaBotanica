/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/pages/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/features/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cb-bg': '#F7F3EB',       // fondo claro
        'cb-bg-soft': '#EFE3D2',  // fondo suave para bloques
        'cb-accent': '#65a475ff',   // verde principal
        'cb-accent-soft': '#8aca9dff', // verde suave
        'cb-sand': '#E4C9A3',     // arena
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

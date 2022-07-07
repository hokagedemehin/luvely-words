/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fam1: ['Big Shoulders Stencil Display', 'cursive'],
        fam2: ['Covered By Your Grace', 'cursive'],
        fam3: ['Fredoka', 'sans-serif'],
        fam4: ['Lexend Deca', 'sans-serif'],
        fam5: ['Recursive', ' sans-serif'],
        fam6: ['Red Rose', 'cursive'],
        fam7: ['Sansita', 'sans-serif'],
        fam8: ['Texturina', 'serif'],
        fam9: ['Truculenta', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

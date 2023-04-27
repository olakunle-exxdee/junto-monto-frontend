/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        csdisplayReg: ['ClashDisplay-Regular', 'serif'],
        csdisplayMD: ['ClashDisplay-Medium', 'serif'],
        satoshiReg: ['Satoshi-Regular', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')],
};

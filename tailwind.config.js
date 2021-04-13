
function px(pixels) {
    return `${pixels / 16}rem`;
  }
  
  module.exports = {
    purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
      fontSize: {
        xs: px(12),
        sm: px(14),
        base: px(15),
        lg: px(18),
        xl: px(20),
        "2xl": px(24),
        "3xl": px(30),
        "4xl": px(36),
        "5xl": px(48),
        "6xl": px(64),
      },
      screens: {
        'xs2': {'max': '600px'},
          // => @media (max-width: 600px) { ... } 
        'xs': {'max': '410px'},
        // => @media (max-width: 410px) { ... } 
        'sm': {'max': '375px'},
         // => @media (max-width: 375px) { ... } 
      },
      extend: {
        width: {
          '48': '14.2857143%',
        }
      },
    },
    variants: {},
    plugins: [require("@tailwindcss/ui")],
  };
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      '.container': {
        '@apply max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12': {},
      },
    })
    matchUtilities(
      {
        row: (size) => {
          const spacing = theme('spacing');
          const value = Object.keys(spacing).find(key => spacing[key] === size);
          const intValue = parseInt(value);

          let smValue;
          if (value === 'px') {
            smValue = '0.5';
          } else if (intValue > 0) {
            smValue = intValue * 2;
          } else if (intValue === 0) {
            smValue = 'px';
          } else {
            smValue = value;
          }

          return {
            [`@apply py-${value} sm:py-${smValue}`]: {},
          };
        },
      },
      {
        values: theme('spacing'),
      }
    )
  }
)

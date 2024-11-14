const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      '.container': {
        '@apply mx-auto': {},
      },
      ...require('./components/buttons')
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

module.exports.vinkasColors = require('./colors/vinkas');
module.exports.singfuseColors = require('./colors/singfuse');

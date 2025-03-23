import tailwindPlugin from 'tailwindcss/plugin';
import colorUtilities from './utilities/colors';
import buttons from './utilities/buttons';

export default tailwindPlugin(
  function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      ...buttons,
      ...colorUtilities(theme('colors')),
    })
    matchUtilities(
      {
        row: (size) => {
          const spacing = theme('spacing') as Record<string, string>;
          const value = Object.keys(spacing).find(key => spacing[key] === size) as string;
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

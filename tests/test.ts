import postcss from 'postcss';
import * as vinkascss from '../lib/index';
import colors from '../lib/colors/default';
import singfuseColors from '../lib/colors/singfuse';

const config = {
  content: [
    {
      raw: "",
    },
  ],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [vinkascss.plugin],
};

let rowExpected = `
.vinkas-row-0 {
    padding-top: 0px;
    padding-bottom: 0px
}
@media (min-width: 640px) {
    .vinkas-row-0 {
        padding-top: 1px;
        padding-bottom: 1px
    }
}
.vinkas-row-0\\.5 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem
}
@media (min-width: 640px) {
    .vinkas-row-0\\.5 {
        padding-top: 1px;
        padding-bottom: 1px
    }
}
.vinkas-row-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}
@media (min-width: 640px) {
    .vinkas-row-1 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem
    }
}
.vinkas-row-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
@media (min-width: 640px) {
    .vinkas-row-2 {
        padding-top: 1rem;
        padding-bottom: 1rem
    }
}
.vinkas-row-px {
    padding-top: 1px;
    padding-bottom: 1px
}
@media (min-width: 640px) {
    .vinkas-row-px {
        padding-top: 0.125rem;
        padding-bottom: 0.125rem
    }
}
`

it('vinkas-row', () => {
  config.content[0].raw = "vinkas-row-0 vinkas-row-px vinkas-row-0.5 vinkas-row-1 vinkas-row-2"
  let utilitiesCSS = postcss([require("@tailwindcss/postcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(rowExpected.trim())
  })
})

it('vinkas colors', () => {
  expect(vinkascss.colors).toBe(colors)
})

it ('singfuse colors', () => {
  expect(vinkascss.singfuseColors).toBe(singfuseColors)
})

let buttonsExpected = `
.btn {
    display: inline-flex;
    align-items: center;
    border-radius: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}
`

it ('buttons', () => {
  config.content[0].raw = "btn"
  let utilitiesCSS = postcss([require("@tailwindcss/postcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(buttonsExpected.trim())
  })
})

let colorsExpected = `
.color-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(14 97 234 / var(--tw-bg-opacity, 1));
    --tw-text-opacity: 1;
    color: rgb(238 248 255 / var(--tw-text-opacity, 1))
}
`

it ('colors', () => {
  config.content[0].raw = "color-primary"
  let utilitiesCSS = postcss([require("@tailwindcss/postcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(colorsExpected.trim())
  })
})

let colorsWithShadeExpected = `
.color-secondary-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 208 80 / var(--tw-bg-opacity, 1));
    --tw-text-opacity: 1;
    color: rgb(177 82 12 / var(--tw-text-opacity, 1))
}
`

it ('colors with shade', () => {
  config.content[0].raw = "color-secondary-300"
  let utilitiesCSS = postcss([require("@tailwindcss/postcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(colorsWithShadeExpected.trim())
  })
})

const postcss = require('postcss')
const plugin = require("../src/index");

const config = {
  content: [
    {
      raw: "",
    },
  ],
  theme: {
    colors: {
      ...require("../src/colors/vinkas"),
    },
  },
  plugins: [plugin],
};

let containerExpected = `
.container {
    margin-left: auto;
    margin-right: auto
}
`

it('container', () => {
  config.content[0].raw = "container"
  let utilitiesCSS = postcss([require("tailwindcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(containerExpected.trim())
  })
})

let rowExpected = `
.row-0 {
    padding-top: 0px;
    padding-bottom: 0px
}
@media (min-width: 640px) {
    .row-0 {
        padding-top: 1px;
        padding-bottom: 1px
    }
}
.row-0\\.5 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem
}
@media (min-width: 640px) {
    .row-0\\.5 {
        padding-top: 1px;
        padding-bottom: 1px
    }
}
.row-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}
@media (min-width: 640px) {
    .row-1 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem
    }
}
.row-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
@media (min-width: 640px) {
    .row-2 {
        padding-top: 1rem;
        padding-bottom: 1rem
    }
}
.row-px {
    padding-top: 1px;
    padding-bottom: 1px
}
@media (min-width: 640px) {
    .row-px {
        padding-top: 0.125rem;
        padding-bottom: 0.125rem
    }
}
`

it('row', () => {
  config.content[0].raw = "row-0 row-px row-0.5 row-1 row-2"
  let utilitiesCSS = postcss([require("tailwindcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(rowExpected.trim())
  })
})

it ('vinkas colors', () => {
  expect(plugin.vinkasColors).toBe(require("../src/colors/vinkas"))
})

it ('singfuse colors', () => {
  expect(plugin.singfuseColors).toBe(require("../src/colors/singfuse"))
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
.btn-primary {
    --tw-bg-opacity: 1;
    background-color: rgb(14 97 234 / var(--tw-bg-opacity, 1));
    --tw-text-opacity: 1;
    color: rgb(238 248 255 / var(--tw-text-opacity, 1))
}
.btn-secondary {
    --tw-bg-opacity: 1;
    background-color: rgb(234 151 14 / var(--tw-bg-opacity, 1));
    --tw-text-opacity: 1;
    color: rgb(68 26 4 / var(--tw-text-opacity, 1))
}
`

it ('buttons', () => {
  config.content[0].raw = "btn btn-primary btn-secondary"
  let utilitiesCSS = postcss([require("tailwindcss")(config)]).process(
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
  let utilitiesCSS = postcss([require("tailwindcss")(config)]).process(
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
  let utilitiesCSS = postcss([require("tailwindcss")(config)]).process(
    "@tailwind utilities",
    { from: undefined }
  ).then(({ css }) => {
    expect(css).toBe(colorsWithShadeExpected.trim())
  })
})

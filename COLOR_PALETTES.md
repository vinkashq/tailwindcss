# Color Palette Examples for Vinkas CSS Utilities

The Vinkas CSS utilities (from `src/vinkas-plugin.css`) rely on you defining color and spacing values as CSS custom properties in your main CSS file using the `@theme` directive.

Below are example `@theme` blocks for the color palettes that were previously available as JavaScript exports. You can copy these into your own CSS file and customize them as needed.

## Default Vinkas Palette

This palette provides a standard set of primary and secondary colors.

```css
/* In your main CSS file (e.g., app.css) */
@theme {
  /* Default Primary Color */
  --color-primary: #0e61ea; /* oklch(0.62 0.18 260.08) */
  --color-primary-contrast: #eef8ff; /* oklch(0.96 0.03 258.08) */
  --color-primary-50: #eef8ff;    /* oklch(0.96 0.03 258.08) */
  --color-primary-100: #d8eeff;   /* oklch(0.92 0.05 257.15) */
  --color-primary-200: #bae2ff;   /* oklch(0.88 0.08 256.02) */
  --color-primary-300: #8ad2ff;   /* oklch(0.83 0.11 254.58) */
  --color-primary-400: #54b8ff;   /* oklch(0.77 0.15 252.22) */
  --color-primary-500: #2c96ff;   /* oklch(0.71 0.19 249.99) */
  --color-primary-600: #1578fb;   /* oklch(0.66 0.21 255.76) */
  --color-primary-700: #0e61ea;   /* oklch(0.62 0.18 260.08) */ /* Same as DEFAULT */
  --color-primary-800: #124dbb;   /* oklch(0.52 0.13 265.54) */
  --color-primary-900: #154593;   /* oklch(0.46 0.10 268.24) */
  --color-primary-950: #122a59;   /* oklch(0.29 0.06 264.71) */

  /* Default Secondary Color */
  --color-secondary: #ea970e; /* oklch(0.71 0.16 66.51) */
  --color-secondary-contrast: #441a04; /* oklch(0.26 0.07 50.18) */
  --color-secondary-50: #fffbeb;    /* oklch(0.99 0.02 86.59) */
  --color-secondary-100: #fdf2c8;   /* oklch(0.96 0.04 87.46) */
  --color-secondary-200: #fbe48c;   /* oklch(0.91 0.08 88.21) */
  --color-secondary-300: #f9d050;   /* oklch(0.85 0.12 86.73) */
  --color-secondary-400: #f7bc28;   /* oklch(0.79 0.14 81.85) */
  --color-secondary-500: #ea970e;   /* oklch(0.71 0.16 66.51) */ /* Same as DEFAULT */
  --color-secondary-600: #d5760a;   /* oklch(0.63 0.14 58.72) */
  --color-secondary-700: #b1520c;   /* oklch(0.53 0.12 51.08) */
  --color-secondary-800: #904010;   /* oklch(0.44 0.09 47.31) */
  --color-secondary-900: #763511;   /* oklch(0.38 0.08 46.19) */
  --color-secondary-950: #441a04;   /* oklch(0.26 0.07 50.18) */ /* Same as DEFAULT contrast */

  /* Add other theme values like spacing, breakpoints, etc. here */
  /* For example: */
  /* --spacing-1: 0.25rem; */
  /* --breakpoint-sm: 640px; */
}
```

## Singfuse Palette

This palette offers an alternative primary and secondary color set.

```css
/* In your main CSS file (e.g., app.css) */
@theme {
  /* Singfuse Primary Color */
  --color-primary: #ed2939; /* oklch(0.67 0.21 25.53) */ /* Alizarin Crimson */
  --color-primary-contrast: #fff1f2; /* oklch(0.98 0.01 20.78) */
  --color-primary-50: #fff1f2;    /* oklch(0.98 0.01 20.78) */
  --color-primary-100: #ffe0e3;   /* oklch(0.93 0.04 20.98) */
  --color-primary-200: #ffc6cb;   /* oklch(0.86 0.07 20.71) */
  --color-primary-300: #ff9ea6;   /* oklch(0.78 0.12 20.73) */
  --color-primary-400: #ff6672;   /* oklch(0.71 0.17 22.49) */
  --color-primary-500: #fe3545;   /* oklch(0.68 0.20 25.02) */
  --color-primary-600: #ed2939;   /* oklch(0.67 0.21 25.53) */ /* Same as DEFAULT */
  --color-primary-700: #c60f1e;   /* oklch(0.56 0.18 26.82) */
  --color-primary-800: #a4101c;   /* oklch(0.49 0.15 26.15) */
  --color-primary-900: #87151e;   /* oklch(0.43 0.12 24.94) */
  --color-primary-950: #4a050b;   /* oklch(0.27 0.07 20.81) */

  /* Singfuse Secondary Color */
  --color-secondary: #29eddd; /* oklch(0.87 0.14 195.21) */ /* Bright Turquoise */
  --color-secondary-contrast: #003435; /* oklch(0.27 0.03 191.88) */
  --color-secondary-50: #eefffc;    /* oklch(0.98 0.01 189.52) */
  --color-secondary-100: #c5fff8;   /* oklch(0.96 0.04 191.58) */
  --color-secondary-200: #8cfff1;   /* oklch(0.93 0.08 192.89) */
  --color-secondary-300: #4afee9;   /* oklch(0.90 0.12 194.03) */
  --color-secondary-400: #29eddd;   /* oklch(0.87 0.14 195.21) */ /* Same as DEFAULT */
  --color-secondary-500: #00cfc1;   /* oklch(0.79 0.14 191.56) */
  --color-secondary-600: #00a79f;   /* oklch(0.69 0.11 189.74) */
  --color-secondary-700: #018480;   /* oklch(0.59 0.09 188.10) */
  --color-secondary-800: #066966;   /* oklch(0.49 0.07 186.92) */
  --color-secondary-900: #0b5654;   /* oklch(0.41 0.05 186.21) */
  --color-secondary-950: #003435;   /* oklch(0.27 0.03 191.88) */ /* Same as DEFAULT contrast */
}
```
I've added the OKLCH values as comments for better color representation, as hex can be limiting.
The contrast logic from the original plugin (1000-X for shades) is implicitly handled by which CSS variable is paired with which in the utilities defined in `vinkas-plugin.css`. Users defining these themes would need to ensure the paired variables make sense for contrast. The example above uses the original pairings from the JS color objects.

Now that the color information is preserved in `COLOR_PALETTES.md`, I can delete the original TypeScript color files.

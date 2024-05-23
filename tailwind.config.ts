import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./*/*.{liquid,json,js}'],
  theme: {
    colors: {
      'primary': 'hsl(var(--color-primary) / <alpha-value>)',
      'primary-content': 'hsl(var(--color-primary-content) / <alpha-value>)',
      'secondary': 'hsl(var(--color-secondary) / <alpha-value>)',
      'secondary-content': 'hsl(var(--color-secondary-content) / <alpha-value>)',
      'accent': 'hsl(var(--color-accent) / <alpha-value>)',
      'accent-content': 'hsl(var(--color-accent-content) / <alpha-value>)',
      'neutral': 'hsl(var(--color-neutral) / <alpha-value>)',
      'neutral-content': 'hsl(var(--color-neutral-content) / <alpha-value>)',
      'base-100': 'hsl(var(--color-base-100) / <alpha-value>)',
      'base-200': 'hsl(var(--color-base-200) / <alpha-value>)',
      'base-300': 'hsl(var(--color-base-300) / <alpha-value>)',
      'base-content': 'hsl(var(--color-base-content) / <alpha-value>)',
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.base-content/80'),
            a: {
              color: theme('colors.primary/100'),
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.base-content/100'),
            },
            code: {
              color: theme('colors.base-content/100'),
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
          },
        },
      }),
    }
  },
  plugins: [
    typography,
  ],
} satisfies Config;

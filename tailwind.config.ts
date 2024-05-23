import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./*/*.{liquid,json,js}'],
  theme: {
    colors: {
      'primary-bg': 'hsl(var(--color-primary-bg) / <alpha-value>)',
      'primary-fg': 'hsl(var(--color-primary-fg) / <alpha-value>)',
      'secondary-bg': 'hsl(var(--color-secondary-bg) / <alpha-value>)',
      'secondary-fg': 'hsl(var(--color-secondary-fg) / <alpha-value>)',
      'accent-bg': 'hsl(var(--color-accent-bg) / <alpha-value>)',
    }
  },
  plugins: [
    typography,
  ],
} satisfies Config;

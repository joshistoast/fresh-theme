# Fresh Theme

This is a Shopify Theme I use to experiment with modern web technologies and practices. It is a work in progress and is not intended for production use.

## Features

- **Vite** for fast development and optimized production builds.
- **Tailwind CSS** for utility-first styling.
- **PWA** support for app-like experience.
- **Liquid** for Shopify theme development.

## Notable experiments

- By embedding the pwa manifest into the html via a snippet, we can access more shop and branding data than we could with a static manifest.json.liquid file.
- Within the tailwind config, we can dynamically create a new set of color classes for each color scheme to be used amongst sections. A demo for this is available in the preview of the theme.

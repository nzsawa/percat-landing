# Public Assets

This folder contains static assets that are served directly by the web server.

## Favicon Files

The following favicon files are currently placeholders and should be replaced with actual image files:

- `favicon.ico` - Traditional favicon (16x16, 32x32, 48x48)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `apple-touch-icon.png` - 180x180 PNG for iOS home screen

## Web App Manifest

- `site.webmanifest` - Web app manifest for PWA functionality

## How to Generate Favicons

You can generate all these favicon files from a single logo using online tools like:

1. [favicon.io](https://favicon.io/) - Upload your logo and download all formats
2. [realfavicongenerator.net](https://realfavicongenerator.net/) - More comprehensive favicon generator
3. [favicon-generator.org](https://favicon-generator.org/) - Simple favicon generator

## File Structure

```
public/
├── favicon.ico              # Traditional favicon
├── favicon.svg              # Vector favicon
├── favicon-16x16.png        # 16x16 PNG
├── favicon-32x32.png        # 32x32 PNG
├── apple-touch-icon.png     # iOS touch icon (180x180)
├── site.webmanifest         # Web app manifest
└── README.md               # This file
```

## Notes

- All favicon files are referenced in `index.html`
- The SVG favicon is currently a placeholder with a blue "P" logo
- Replace the placeholder files with your actual brand assets
- The manifest file is configured for Percat.app branding

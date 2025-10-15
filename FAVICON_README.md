This project expects favicon and related icons to be in the `public/` folder so they are served at the root URL.

Recommended files to add to `public/`:

- favicon-16x16.png (16x16)
- favicon-32x32.png (32x32)
- favicon-48x48.png (48x48)
- favicon-96x96.png (96x96)
- apple-touch-icon.png (180x180)
- favicon.ico (multi-size ICO)
- android-chrome-192x192.png (192x192)
- android-chrome-512x512.png (512x512)

Guidance to create them from your logo (Logo_icon.png) using ImageMagick (Windows PowerShell):
eh# If you have ImageMagick installed, run these commands in PowerShell (adjust paths if needed):

magick public\Logo_icon.png -resize 16x16 public\favicon-16x16.png
magick public\Logo_icon.png -resize 32x32 public\favicon-32x32.png
magick public\Logo_icon.png -resize 48x48 public\favicon-48x48.png
magick public\Logo_icon.png -resize 96x96 public\favicon-96x96.png
magick public\Logo_icon.png -resize 180x180 public\apple-touch-icon.png
magick public\Logo_icon.png -resize 192x192 public\android-chrome-192x192.png
magick public\Logo_icon.png -resize 512x512 public\android-chrome-512x512.png

# To create a multi-size .ico (Windows):

magick public\Logo_icon.png -define icon:auto-resize=64,48,32,16 public\favicon.ico

Notes:

- Google recommends favicon images that are multiples of 48px for best compatibility. Include at least a 48x48 or 96x96.
- Verify each file is accessible in the browser, e.g. https://heuristicsystem.com/favicon-32x32.png

Recrawl with Google Search Console:

1. Open Search Console and select your property (https://heuristicsystem.com).
2. Use the URL Inspection tool and enter your home page URL (/).
3. If cached, click "Request Indexing" to ask Google to recrawl.

Troubleshooting:

- If Google doesn't update immediately, wait a few hours to a few days due to caching.
- Ensure robots.txt does not block crawlers (it's already allowing / in this repo).

If you'd like, I can generate these PNGs and an ICO file and add them to `public/` using ImageMagick if you confirm it's okay to create rasterized versions from `Logo_icon.png` already in `public/`.

## Cloudflare Pages Deploy

1) Merge `release/perfect-v5` into `main`.
2) Push `main` to origin (Cloudflare Pages auto-builds).
3) Confirm the deployment finished successfully in Cloudflare Pages.

## Post-Deploy Verification

1) Check response codes:
   - `/`, `/about/`, `/services/`, `/providers/`, `/privacy/`, `/terms/` should return 200 with no redirects.
2) Verify assets:
   - `/assets/brand/favicon-32.png`
   - `/assets/brand/favicon.ico`
   - `/assets/img/og-ppw-v5.jpg`
3) Validate `robots.txt` and `sitemap.xml`.
4) Confirm canonical URLs match the sitemap URLs.

## Social Preview Refresh

1) Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
2) LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
3) iMessage/WhatsApp cache: changes may take several days; cache-busting is already applied with `?v=6`.

## Google Indexing

1) In Search Console, Inspect URL for `/` and request indexing.
2) Submit/refresh the sitemap: `https://positivepathwellness.com/sitemap.xml`.

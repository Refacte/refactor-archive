# Refactor public website snapshot

The site at https://refactor.press was captured on November 25, 2026 from 9:26:57 to 9:27:04 p.m. Pacific Standard Time. It was serving Sites version 372, associated with source commit `e09859531f77e8e8e013eb27e1737572269e2cd7`.

The archive holds 734 successful responses, including the 66 URLs in the two published sitemaps and the 727 files in the staged public deployment. Of the staged files, 654 matched the public responses byte for byte and 73 HTML files matched after line ending normalization and removal of injected Cloudflare challenge scripts for comparison. All 696 distinct response bodies retain the original HTTP-decoded bytes.

## Verify and view

Use Node.js 22 or newer from this folder.

```sh
node replay.mjs verify
node replay.mjs
```

Open http://127.0.0.1:8765/ to browse the recorded responses. Relative paths are served from the snapshot. Absolute links in the original material can still open the original site or third-party services.

`capture-manifest.json` maps requested URLs to their HTTP response metadata and SHA-256 body files. The archived HTTP responses cover the public static pages, PDFs, downloads, assets and metadata observed during this capture. External resources, hosting telemetry and application data require separate records.

`replay-aliases.json` records 24 redirects used by linked PDFs. The replay server handles all 21 same-host paths and serves their captured destinations. The three legacy-host redirects are documented in the same file. Absolute PDF links continue to address the host named in the document.

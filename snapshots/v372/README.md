# Refactor public website snapshot · v372

Mathematical writing by Henry Shin at [refactor.press](https://refactor.press). Captured November 25, 2026, from 9:26:57 to 9:27:04 p.m. Pacific time.

- `site/` contains all 727 files staged for public serving in the v372 deployment, copied byte for byte. This includes the manuscripts, figures, and other downloads offered by the website.
- `live/` contains the original HTTP-decoded bodies of 734 successful requests, including all 66 URLs in the two public sitemaps. Identical bodies share a file. The manifest records the URLs, HTTP metadata, checksums, and the public build comparison. A separate file records 24 verified legacy redirects.
- `SITE-PROVENANCE.json` records the v372 source revision and capture coverage. `SHA256SUMS` covers every file in this snapshot apart from the checksum list itself.

All 727 staged files matched the live responses. Of those, 654 matched byte for byte. The other 73 were HTML and matched after excluding Cloudflare-injected scripts and normalizing line endings for comparison. The archive preserves the original bytes of both copies. External links and provider scripts are retained as references to their original services.

Run `node verify.mjs` using Node.js 22 or newer to verify the full snapshot. Run `node live/replay.mjs` to replay the captured site on [localhost](http://127.0.0.1:8765/). The published homepage includes the abstract-algebra quote about the half-built Lego spaceship, with Henry Shin’s byline.

The public release preserves what Refactor served. The editable site repository, unpublished drafts, and hosting-side records are held privately. Existing copyright, credits, and [reuse terms](https://refactor.press/license) apply.

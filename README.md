# Refactor — dated website archive

Mathematical writing by Henry Shin at [refactor.press](https://refactor.press).

The [November 25, 2026 capture of version 372](https://github.com/Refacte/refactor-archive/releases/tag/snapshot-2026-11-26T052657Z-v372) is available as an immutable release. Its versioned files are in [`snapshots/v372/`](snapshots/v372/). The original archive files documented below are the November 16 capture of version 287.

This snapshot preserves the published file tree of site version **287**, source commit **ee4cfe272f253e3d8beaf72caa9fd246bd7fb289**. The fresh capture ran from **2026-11-17T00:52:06.263Z** through **2026-11-17T00:52:22.460Z**, on **16 November 2026** in America/Los_Angeles.

## Contents

- `site/` contains all **497** public build files, copied byte for byte from the retained version-287 deployment archive.
- `live/` contains the **497** freshly retrieved, unchanged HTTP-decoded response bodies.
- `evidence/http-capture.json` records URLs, response headers, request times, checksums, and comparison results.
- `evidence/SITE-PROVENANCE.json` identifies the source, deployment, capture, and retained build artifact.
- `SHA256SUMS` covers every archived file except itself.
- `verify.mjs` verifies the file checksums with Node.js.

All **429** non-HTML responses matched the build exactly. All **68** HTML responses matched after the documented comparison normalization of line endings and provider-injected challenge scripts. The original captured bytes remain in `live/`.

The release includes the explicitly uploaded public snapshot ZIP and a checksum manifest with an OpenTimestamps receipt. The deployable Worker archive is preserved in the private backup. Its local compressed bytes and the hosting provider's separately stored TAR have separate hashes in the provenance record.

## Verification

After extracting the explicit snapshot ZIP, run `node verify.mjs`.

Verify the immutable release with `gh release verify snapshot-2026-11-17T005206Z-v287 --repo Refacte/refactor-archive`. Verify each downloaded release asset with `gh release verify-asset snapshot-2026-11-17T005206Z-v287 FILE --repo Refacte/refactor-archive`.

Verify the timestamp receipt with `ots verify SHA256SUMS-public.txt.ots`. A receipt with only pending calendar attestations requires `ots upgrade SHA256SUMS-public.txt.ots` after confirmation. Keep the checksum manifest, receipt, and archive together. The completed backup report records the verification actually obtained.

## Preservation

The complete editable source is backed up in a private repository because it contains unpublished material. This public snapshot preserves the published pages, PDFs, downloads, images, scripts, styles, and metadata. It excludes unpublished source, credentials, runtime secrets, and visitor records.

Fixed historical editions retain their names, authorship, dates, and citations. Earlier snapshots remain available in this repository's [releases](https://github.com/Refacte/refactor-archive/releases), and earlier Tensorgami editions are in the [historical archive](https://github.com/Refacte/tensorgami-archive).

Existing copyright, credits, and reuse terms continue to apply. See the [site's reuse page](https://refactor.press/license).

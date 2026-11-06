# Refactor — dated website archive

Current website: **[refactor.press](https://refactor.press)**. Mathematical writing by Henry Shin.

This repository preserves the complete published file tree of Refactor site version **219**, together with a fresh capture of each of its **292** public files. Capture began **2026-11-06T03:08:59.510Z** and finished **2026-11-06T03:09:05.363Z** (UTC), on **5 November 2026** in America/Los_Angeles.

## Contents

- 'site/': the published build's 292 public HTML pages, styles, scripts, images, PDFs, source downloads, metadata and other assets, copied byte for byte from the version-219 build.
- 'live/': all 292 response bodies fetched from https://refactor.press during this capture. These are HTTP-decoded bytes; responses and final URLs are recorded in 'evidence/http-capture.json'.
- 'evidence/': content hashes, request times and sanitized response headers; source and deployment provenance.
- 'SHA256SUMS': hashes of every preserved repository file other than the checksum file itself.
- 'verify.mjs': local verification with Node.js: 'node verify.mjs'.

All **227** non-HTML responses matched the build byte for byte. All **65** HTML responses matched after the documented comparison normalization (line endings and a provider-injected challenge script). Their original captured response bytes remain unchanged in 'live/'.

The immutable GitHub release also includes an explicitly uploaded ZIP of this repository and the retained deployable Worker build archive. The deployable artifact contains 315 files. The artifact's own hash is recorded separately from the hosting provider's stored TAR hash; those TAR containers have different hashes and are not asserted to be byte-identical.

## Provenance and date limits

The original source commit is 'c9e227c7464654ecb8b82d11473d85a20363f867'. The hosting provider reports successful publication of version 219 at **2026-11-05T19:03:39.927688Z**. That timestamp is the provider's publication record. The later capture and GitHub release record preserve what was captured and archived at their own dates; they do not retrospectively certify earlier dates.

GitHub release immutability locks the associated tag and uploaded assets and creates a signed release attestation. Ordinary Git author/committer dates are user-controlled metadata. The release record supports content integrity and chronology; it does not by itself establish authorship, mathematical correctness, novelty or first discovery. Keep independent copies: an entire GitHub release can still be deleted.

The complete editable site source also contains deliberately unpublished material and is backed up separately in a private repository. It is intentionally absent from this public archive. No analytics database, visitor records, credentials or runtime secrets are included.

## Earlier names and rights

Refactor is the current publication, formerly Refacte and previously Tensorgami. Fixed historical editions retain their original names, authorship, dates and citations. Earlier releases remain in the [historical archive](https://github.com/Refacte/tensorgami-archive).

This archival copy does not grant a new blanket license or claim ownership of third-party material. Existing copyright, credits and reuse terms are preserved; consult the [site's reuse page](https://refactor.press/reuse).

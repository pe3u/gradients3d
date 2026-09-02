# gradients3d

Static rebuild of the [gradients.dk](https://gradients.dk) content and structure, built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

The live site at gradients.dk currently runs on Adobe Portfolio and is **not** served from this repo. This project is parked on GitHub Pages for now — editable here, but not wired up to the gradients.dk domain:

- **Live preview:** https://pe3u.github.io/gradients3d/
- **Production site:** https://gradients.dk (Adobe Portfolio — unaffected by this repo)

## Structure

```
src/
  _data/site.json      # nav, footer "shortcuts", contact details
  _data/year.js         # current year, for the footer copyright line
  _includes/layout.njk  # shared header / nav / footer
  _includes/gallery.njk # image-grid + caption + prev/next macro for portfolio pages
  assets/
    css/main.css         # site styles
    images/<page>/*.jpg  # per-page image assets
  *.njk                  # one template per route (see below)
```

Each `.njk` file at the root of `src/` maps to one page. Eleventy's default
behavior turns `src/services.njk` into `/services/`, etc. — file names were
chosen to match the live site's URLs exactly (`home-page`, `copy-of-landscape`,
`woodenplaystructure`, `immersiveinteractive`, ...).

| Route | Content |
|---|---|
| `/` | Redirects to `/home-page/` |
| `/home-page/` | Home — image grid |
| `/services/` | Services list |
| `/about/` | Studio bio |
| `/contact/` | Contact form |
| `/product/`, `/landscape/`, `/copy-of-landscape/` (Public), `/playgrounds/`, `/ropeplaystructures/`, `/largeplaystructures/`, `/woodenplaystructure/`, `/themedplaystructures/`, `/sport/`, `/interior/`, `/residential/`, `/immersiveinteractive/` | Portfolio category pages — gallery + caption(s) + prev/next |

## Development

Requires Node.js.

```bash
npm install
npm run dev     # Eleventy dev server at http://localhost:8080
npm run build   # builds to _site/
```

## Deployment

`.github/workflows/static.yml` builds the site (`npm ci && npm run build`) and
publishes `_site/` to GitHub Pages on every push to `main`.

Because this is a GitHub Pages **project site** (not a `<user>.github.io` user
site or a custom domain), it's served under a subpath:
`https://pe3u.github.io/gradients3d/`. Eleventy's `pathPrefix` is set to
`/gradients3d/` in [`.eleventy.js`](.eleventy.js) so every internal link and
asset path (run through the `url` filter in the templates) resolves correctly
under that subpath. If this site ever moves to a custom domain or a
`pe3u.github.io` user/org page, update or remove `pathPrefix` accordingly —
otherwise every link will be off by one path segment.

## Known gaps

- **Contact form** has no backend yet — GitHub Pages only serves static
  files. It currently falls back to a `mailto:` action; swap it for a real
  form service (e.g. Formspree) before relying on it.
- **Immersive/interactive page** has no images — the live site uses
  screen-recording video embeds there that weren't ported over.
- Colors/typography are an original approximation of the Adobe Portfolio
  look, not a pixel-perfect match.

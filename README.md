# Athlethium website

The marketing site for Athlethium, the adaptive coaching app for cyclists, runners and triathletes. It's a static [Astro](https://astro.build) site served from Cloudflare Workers.

It has three pages:

- **Home** (`/`): what the app does, how it works, and links to the iOS (TestFlight) and Android downloads
- **Privacy Policy** (`/privacy`)
- **Terms & Conditions** (`/terms`)

## Getting started

Needs Node 22.

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                                                 |
| :---------------- | :----------------------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload                             |
| `npm run build`   | Builds the site into `dist/`                                 |
| `npm run preview` | Builds, then serves it with Wrangler as Cloudflare would     |
| `npm run check`   | Build, typecheck and a `wrangler deploy --dry-run`           |
| `npm run deploy`  | Builds and deploys from your machine (normally CI does this) |

## Project structure

```text
src/
  layouts/
    Base.astro          # <head>, theme setup, header, footer, scroll reveals
    Legal.astro         # Page layout for the privacy policy and terms
  components/
    Header.astro        # Sticky nav and the light/dark toggle
    Footer.astro
    PhoneMockup.astro   # The app's "Today" screen drawn in HTML for the hero
    StoreButtons.astro  # iOS and Android download links
  pages/
    index.astro         # Home page
    privacy.astro
    terms.astro
  styles/
    global.css          # Design tokens (colours, type, radii), buttons, base styles
public/                 # Logo, favicon and other static files, served as-is
```

## Editing the site

- **Colours and fonts** are design tokens at the top of `src/styles/global.css`. They match the app: zinc greys with a green accent. Each theme sets its own values: light by default, and dark when the system asks for it or the visitor picks it.
- **Download links** live in `src/components/StoreButtons.astro`, which is used in both the hero and the download banner.
- **Legal pages** contain only their text. The layout comes from `src/layouts/Legal.astro`. Update the effective date passed to `<Legal>` when the wording changes.
- **Theme choice** is saved in the browser under the `localStorage` key `athlethium-theme`. Without a saved choice, the site follows the system setting.

## Deployment

`.github/workflows/deploy.yml` runs on GitHub Actions:

- **Every pull request** builds the site, so a broken build shows up before merging.
- **Every push to `main`**, including merged PRs, builds and deploys to the `athlethium-website` Worker (see `wrangler.jsonc`).

The deploy needs two repository secrets:

- `CLOUDFLARE_API_TOKEN`: a token made from the **Edit Cloudflare Workers** template
- `CLOUDFLARE_ACCOUNT_ID`

To redeploy without a code change, run the workflow from the Actions tab or with `gh workflow run deploy.yml`.

## Related repositories

- [fitness-app](https://github.com/harrycodd/fitness-app): the Expo / React Native app
- [fitness-app-backend](https://github.com/harrycodd/fitness-app-backend): Firebase Cloud Functions that generate the training plans

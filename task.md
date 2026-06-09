# Remaining Website Tasks

Last checked: branch `2026-redesign` at `5ec090e`, clean and tracking `origin/2026-redesign`.

The legacy asset cleanup is done on this branch. The current repo only contains the rebuilt static site, Font Awesome assets, redirect pages, and five active images:

- `images/avatar.jpg`
- `images/icon.jpg`
- `images/m8.jpg`
- `images/mosaic.JPG`
- `images/tibet.jpg`

## 1. Add Or Update The CV

- Current link path: `assets/Juno_Li_CV.pdf`
- Current status: file is missing.
- Used in: `index.html`
- Task: add the latest CV PDF at exactly `assets/Juno_Li_CV.pdf`, or change every CV link in `index.html`.

Check after adding:

```bash
test -f assets/Juno_Li_CV.pdf
```

## 2. Replace Or Confirm Active Images

| Current path | Current dimensions | Current use | Minimum target | Ideal target | Remaining task |
| --- | --- | --- | --- | --- | --- |
| `images/avatar.jpg` | `279 x 279` | Hero portrait, preload image, social preview fallback | `600 x 600` | `1200 x 1200` | Replace with a higher-resolution recruiter-facing headshot, or accept the current low-resolution image. |
| `images/icon.jpg` | `538 x 538` | Favicon | `256 x 256` | `512 x 512` | Meets size target. Only replace if you want a cleaner favicon. |
| `images/mosaic.JPG` | `641 x 569` | Large-Scale Astronomical Data Pipeline visual | `1000 x 625` for screenshots, or `1200 x 750` for diagrams | `1600 x 1000` or SVG/PNG schematic | Replace with a clearer pipeline schematic, HST metadata/overlap visual, or higher-resolution project figure. |
| `images/tibet.jpg` | `201 x 360` | Beyond Work travel thumbnail | `800 x 600` | `1200 x 900` | Replace with a higher-resolution `4:3` travel/collaboration image. Current image is below target and portrait-oriented. |
| `images/m8.jpg` | `1418 x 1042` | Beyond Work telescope imaging thumbnail | `800 x 600` | `1200 x 900` | Meets minimum. Verify crop and visual quality in the card; replace only if you prefer a stronger stacked image. |

General image rules:

- Use lowercase, hyphenated filenames with no spaces.
- Use PNG for charts, dashboards, diagrams, and screenshots with text.
- Use JPG for photography unless PNG is visibly better.
- Keep important subjects near the center because cards crop images.
- Keep most images under `1 MB`; under `500 KB` is better for simple photos.
- Update alt text in `index.html` or `assets/js/site-data.js` whenever an image changes.

## 3. Optional Dedicated Social Preview Image

- Current social preview: `https://jun01ee.github.io/images/avatar.jpg`
- Current issue: `images/avatar.jpg` is square and low resolution.
- Recommended asset: `images/social-preview.jpg`
- Target: `1200 x 630`, aspect ratio `1.91:1`.
- Task: create a dedicated social card image and update `og:image` and `twitter:image` in `index.html`.

## 4. Replace Project Placeholders

All project placeholders are in `assets/js/site-data.js`.

### Solar Yield Forecasting MLOps Pipeline

- Current placeholder title: `Live 7-day forecast output will appear here.`
- Current placeholder description: `Replace this with the latest forecast PNG or published output path when available.`
- Needed asset: latest forecast PNG/output.
- Target: PNG, `16:10` or `4:3`, minimum `1000 x 625`, ideal `1600 x 1000`.
- Task: change the demo from `type: "placeholder"` to `type: "image"`.

Example:

```js
demo: {
  type: "image",
  image: "images/solar-forecast.png",
  alt: "Seven-day solar irradiance forecast output",
  caption: "Latest daily forecast published by the scheduled pipeline."
}
```

### Spatially Resolved Galaxy Spectra Analysis Software

- Current placeholder title: `Program architecture flowchart coming soon.`
- Needed asset: Miro architecture export.
- Preferred format: SVG.
- PNG fallback: `16:9` or `16:10`, minimum `1200 x 750`, ideal `1920 x 1080` or `1600 x 1000`.
- Task: add exported architecture visual and update the project demo.
- Optional: add a public Miro link as a secondary link only if it works without permissions.

### Visualisation / Dashboarding Portfolio

- Current placeholder title: `Dashboard screenshots coming soon.`
- Needed decisions/assets: dashboard theme, screenshot, KPI list, data model/star schema, insight brief, recommendations, and final Power BI/Tableau/GitHub link.
- Target image: PNG, `16:9` or `16:10`, minimum `1280 x 720`, ideal `1920 x 1080`.
- Task: replace placeholder demo and update the project description when the BI project exists.

### Data Engineering Zoomcamp Capstone

- Current placeholder title: `Architecture diagram placeholder.`
- Needed asset: architecture diagram or README screenshot.
- Target: SVG preferred, or PNG `16:9`/`16:10`, minimum `1200 x 750`.
- Task: replace placeholder pipeline graphic.

### OpenEvolve AI Experiments

- Current placeholder title: `Experiment summary coming soon.`
- Needed asset/content: best result, scoring trace, log screenshot, or concise experiment summary.
- Target screenshot: PNG, `16:10` or `4:3`, minimum `1000 x 625`.
- Task: replace placeholder AI/log graphic.

### Large-Scale Astronomical Data Pipeline

- Current image: `images/mosaic.JPG`
- Current caption: `Schematic visual placeholder for archival image processing and overlap detection.`
- Task: replace with a clearer project visual or update caption if keeping the current image.

## 5. Finish Beyond Work Visuals

Beyond Work content is in `assets/js/site-data.js`.

- Running: currently uses a `12 km` text placeholder. Add a race/running image only if desired.
- Travel: replace `images/tibet.jpg` because it is low-resolution and portrait-oriented.
- Photography: `images/m8.jpg` meets minimum size. Verify thumbnail crop and replace only if desired.

Target for Beyond Work thumbnails:

- Aspect ratio: `4:3`
- Minimum: `800 x 600`
- Ideal: `1200 x 900`

## 6. Manually Verify Links Before Public Launch

Internal links:

- `#projects`
- `#capabilities`
- `#experience`
- `#contact`
- `#top`

External links:

- `https://github.com/jun01ee`
- `https://gitlab.com/jun01ee`
- `https://www.linkedin.com/in/jun01ee/`
- `https://scholar.google.com/citations?user=Q0zwr3cAAAAJ&hl=en&authuser=1`
- `https://github.com/jun01ee/solar-yield-forecasting-pipeline`
- `https://gitlab.com/jun01ee/data-engineering-zoomcamp`
- `https://github.com/jun01ee/OpenEvolve`
- `mailto:juno.li.research@gmail.com`

CV links:

- `/assets/Juno_Li_CV.pdf`

Redirect pages:

- `research.html` should redirect to `./#projects`.
- `observation.html` should redirect to `./#projects`.

## 7. Final Local Checks

Run before the next commit:

```bash
git status --short
git diff --check
python3 -m http.server 8000
```

Then check:

- Desktop layout.
- Mobile layout.
- CV download.
- Missing image behavior.
- Project card readability.
- Beyond Work section height and crop.

## 8. Make The Redesign Public

Current state:

- `2026-redesign` is pushed to `origin/2026-redesign`.
- `master` still points to the old public branch.

When ready, merge the redesign into the GitHub Pages publishing branch.

If publishing from `master`:

```bash
git switch master
git merge --ff-only 2026-redesign
git push origin master
```

If you want the public branch to be `main` instead:

1. Rename the default branch in GitHub from `master` to `main`.
2. Update GitHub Pages settings to publish from `main` and root.
3. Rename locally and push:

```bash
git branch -m master main
git push origin main
```

Only delete the remote `master` branch after GitHub confirms `main` is default and Pages is serving the redesigned site.

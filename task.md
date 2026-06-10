# Remaining Website Tasks

Last checked: branch `2026-redesign` after adding the Miro architecture SVG and link.

The legacy asset cleanup is done on this branch. The current repo only contains the rebuilt static site, Font Awesome assets, redirect pages, and seven active image assets:

- `images/7_Day_GTI_Power_Yield_Profile.png`
- `images/avatar.jpg`
- `images/galaxy-software-architecture.svg`
- `images/icon.jpg`
- `images/jwst-workflow-v5.png`
- `images/m8.jpg`
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
| `images/7_Day_GTI_Power_Yield_Profile.png` | `2661 x 1655` | Solar Yield Forecasting MLOps Pipeline forecast output | `1000 x 625` | `1600 x 1000` | Meets size target. Verify it is the latest published forecast output before launch. |
| `images/avatar.jpg` | `1920 x 1919` | Hero portrait, preload image, social preview fallback | `600 x 600` | `1200 x 1200` | Meets size target. Verify crop and file size in production. |
| `images/galaxy-software-architecture.svg` | SVG | Spatially Resolved Galaxy Spectra Analysis Software architecture visual | SVG | SVG | Verify the exported diagram is readable in the project card and that the Miro link opens in view-only mode. |
| `images/icon.jpg` | `538 x 538` | Favicon | `256 x 256` | `512 x 512` | Meets size target. Only replace if you want a cleaner favicon. |
| `images/jwst-workflow-v5.png` | `993 x 1404` | Large-Scale Astronomical Data Pipeline workflow figure | `800 x 600` equivalent | Source-quality export | Verify readability in the project card, especially on mobile. |
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
- Current issue: `images/avatar.jpg` is square; a dedicated wide preview would look better in link cards.
- Recommended asset: `images/social-preview.jpg`
- Target: `1200 x 630`, aspect ratio `1.91:1`.
- Task: create a dedicated social card image and update `og:image` and `twitter:image` in `index.html`.

## 4. Replace Project Placeholders

All remaining project placeholders are in `assets/js/site-data.js`.

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

## 5. Public Copy Cleanup

These strings are visible on the site or can appear in normal fallback states, but read like internal notes, implementation labels, or unfinished placeholders. Replace them before public launch unless you intentionally want to signal that the item is still in progress.

| Current text | Where | Why it needs review | Suggested direction |
| --- | --- | --- | --- |
| `Headshot image placeholder` | `index.html` image fallback | Placeholder wording can appear if the portrait fails to load. | Use a neutral fallback such as `Portrait unavailable`. |
| `Proof-of-work focus` | `index.html` hero side panel | Slightly jargon-heavy and internal-sounding. | Consider `Portfolio focus`, `Current focus`, or `Project focus`. |
| `Evidence, demos, and work in progress` | `index.html` projects heading | `work in progress` can make the main section feel unfinished. | Consider `Featured Technical Work`, `Selected Projects`, or `Project Evidence`. |
| `CV placeholder` | `index.html` about section link | Explicit placeholder text. | Change to `View CV`, `Download CV`, or remove until the PDF exists. |
| `Compact skill groups for recruiter scanning` | `index.html` capabilities heading | Sounds like design/development rationale, not public copy. | Consider `Core Technical Strengths`, `How I Work Across Data Roles`, or `Technical Capabilities`. |
| `Experience preview` | `index.html` eyebrow | `preview` can sound temporary. | Consider `Experience`, `Background`, or `Selected experience`. |
| `Availability signal` | `index.html` contact details | `signal` sounds like internal recruiter-targeting language. | Consider `Open to`, `Role interests`, or `Current focus`. |
| `Placeholder demo area` | `assets/js/site.js` generated demo caption | Direct placeholder shown on multiple project cards. | Use project-specific captions, or hide this caption for placeholder cards. |
| `Visualisation / Dashboarding Portfolio` | `assets/js/site-data.js` project title | Explicit portfolio placeholder. | Replace once a specific BI/dashboard project exists. |
| `Coming soon` | `assets/js/site-data.js` dashboard status | Public placeholder. | Replace with a concrete status when available, or keep only if intentionally transparent. |
| `Candidate themes: student outcomes, health insurance performance, or operational KPI monitoring.` | `assets/js/site-data.js` dashboard highlight | Reads like planning notes rather than project evidence. | Replace with the chosen dashboard theme. |
| `Planned sections: problem statement, dataset, KPIs, screenshots, data model, insights brief, recommendations, and repo link.` | `assets/js/site-data.js` dashboard highlight | Reads like an internal checklist. | Replace with completed deliverables or remove until available. |
| `Dashboard screenshots coming soon.` | `assets/js/site-data.js` dashboard demo | Direct placeholder. | Replace with dashboard screenshot and caption. |
| `Choose the business theme and add screenshots, KPI notes, and the future Power BI/Tableau/GitHub link.` | `assets/js/site-data.js` dashboard demo | Direct internal instruction. | Replace with a public caption or remove once screenshots exist. |
| `Architecture diagram placeholder is ready for a future project visual.` | `assets/js/site-data.js` Data Engineering highlight | Direct placeholder. | Replace with a real capstone architecture highlight. |
| `Architecture diagram placeholder.` | `assets/js/site-data.js` Data Engineering demo | Direct placeholder. | Replace with a diagram or README screenshot. |
| `Add a pipeline diagram or README screenshot when ready.` | `assets/js/site-data.js` Data Engineering demo | Internal instruction. | Replace with a caption for the real diagram. |
| `Placeholder ready for best-result summary, log screenshot, or experiment notes.` | `assets/js/site-data.js` OpenEvolve highlight | Direct placeholder. | Replace with a concrete result, scoring trace, or experiment insight. |
| `Experiment summary coming soon.` | `assets/js/site-data.js` OpenEvolve demo | Direct placeholder. | Replace with result/log screenshot and caption. |
| `Add best result, scoring trace, or log screenshot.` | `assets/js/site-data.js` OpenEvolve demo | Internal instruction. | Replace with a public caption. |

## 6. Finish Beyond Work Visuals

Beyond Work content is in `assets/js/site-data.js`.

- Running: currently uses a `12 km` text placeholder. Add a race/running image only if desired.
- Travel: replace `images/tibet.jpg` because it is low-resolution and portrait-oriented.
- Photography: `images/m8.jpg` meets minimum size. Verify thumbnail crop and replace only if desired.

Target for Beyond Work thumbnails:

- Aspect ratio: `4:3`
- Minimum: `800 x 600`
- Ideal: `1200 x 900`

## 7. Remove Newly Unused Asset

The HST project now uses `images/jwst-workflow-v5.png`, so this image is no longer referenced by the site:

- `images/mosaic.JPG`

If you want the branch to remain minimal, remove it from the branch:

```bash
git rm images/mosaic.JPG
```

## 8. Manually Verify Links Before Public Launch

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
- `https://miro.com/app/board/uXjVHJ-Kk4k=/?share_link_id=306679700894`
- `https://research-repository.uwa.edu.au/en/publications/sharpening-our-view-of-massive-galaxies-in-the-early-universe/`
- `mailto:juno.li.research@gmail.com`

CV links:

- `/assets/Juno_Li_CV.pdf`

Redirect pages:

- `research.html` should redirect to `./#projects`.
- `observation.html` should redirect to `./#projects`.

## 9. Final Local Checks

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

## 10. Make The Redesign Public

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

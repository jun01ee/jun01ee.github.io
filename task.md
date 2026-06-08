# Website Update Tasks

Use this checklist to verify, replace, or remove materials in the current `2026-redesign` branch. Paths are relative to the repository root.

## Active Figures And Images

These image paths are currently referenced by the rebuilt website.

| Current path | Current use | Where to update | Task |
| --- | --- | --- | --- |
| `images/avatar.jpg` | Hero portrait, preload image, OpenGraph/Twitter preview image | `index.html` | Verify this is the preferred recruiter-facing headshot. Replace image or update all references if using a new filename. |
| `images/icon.jpg` | Browser favicon | `index.html` | Verify the favicon works and is acceptable. Replace with a proper square favicon if preferred. |
| `images/mosaic.JPG` | Large-Scale Astronomical Data Pipeline project visual | `assets/js/site-data.js` | Verify whether this is the best image for the HST pipeline card. Replace with a schematic or pipeline diagram if available. |
| `images/tibet.jpg` | Beyond Work travel thumbnail | `assets/js/site-data.js` | Verify this is the preferred travel image. Replace with a Europe/conference or Asia travel image if more relevant. |
| `images/m8.jpg` | Beyond Work photography/telescope imaging thumbnail | `assets/js/site-data.js` | Verify this is the preferred telescope-based astronomical image. Replace with a stronger stacked deep-sky image if available. |

## Expected Files Not Yet Added

| Expected path | Current use | Task |
| --- | --- | --- |
| `assets/Juno_Li_CV.pdf` | Download CV buttons and CV text link | Add the latest CV PDF at this path, or update both links in `index.html`. |
| `images/solar-forecast.png` | README example only, not currently used | Add the actual solar forecast output image if available, then update the Solar project demo in `assets/js/site-data.js`. |

## Image Specs And Quality Bar

Use consistent, recruiter-facing image quality. Prefer lowercase, hyphenated filenames with no spaces, for example `images/solar-forecast-2026-06.png`.

| Image type | Ideal aspect ratio | Ideal size | Minimum acceptable | Format | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero portrait / headshot | `1:1` square | `1200 x 1200 px` | `600 x 600 px` | JPG or PNG | Face should remain clear after circular/square cropping. Avoid low-light, busy, or overly casual photos. |
| Favicon / icon | `1:1` square | `512 x 512 px` | `256 x 256 px` | PNG or ICO | Use a clean mark or portrait crop that remains legible at browser-tab size. |
| Social preview image | `1.91:1` | `1200 x 630 px` | `1200 x 630 px` | JPG or PNG | Optional but recommended. Current site uses `images/avatar.jpg`; a dedicated `images/social-preview.jpg` would look better in link previews. |
| Project screenshots / forecast plots | `16:10` or `4:3` | `1600 x 1000 px` or `1600 x 1200 px` | `1000 x 625 px` | PNG preferred | Text, axes, legends, and labels must remain readable when the card is about `360 px` wide. |
| Architecture diagrams / flowcharts | `16:9`, `16:10`, or scalable SVG | SVG preferred, otherwise `1920 x 1080 px` or `1600 x 1000 px` | `1200 x 750 px` | SVG or PNG | Prefer SVG for Miro exports. If using PNG, export at 2x and check small-screen readability. |
| Dashboard screenshots | `16:9` or `16:10` | `1920 x 1080 px` or `1600 x 1000 px` | `1280 x 720 px` | PNG | Use a full dashboard or a focused crop. KPI labels and chart legends must be readable. |
| Beyond Work thumbnails | `4:3` | `1200 x 900 px` | `800 x 600 px` | JPG or PNG | The CSS crops these thumbnails to `4:3`; keep important subject matter near the center. |
| Telescope/deep-sky images | `4:3` or source crop | `1200 x 900 px` | `800 x 600 px` | JPG or PNG | Use stacked/processed output with controlled noise and contrast. Avoid images that read as blurry thumbnails. |

General quality targets:

- Keep individual website images under about `1 MB` where practical; under `500 KB` is better for simple photos.
- Use PNG for charts, dashboards, diagrams, and screenshots with text.
- Use JPG for photographic images unless PNG is visibly better.
- Avoid upscaling small source images just to meet dimensions.
- Check each image on desktop and mobile after replacement.
- Update alt text in `index.html` or `assets/js/site-data.js` whenever an image changes.

## Hyperlinks To Verify

### Main Site Links

| Link | Label/use | Where |
| --- | --- | --- |
| `https://jun01ee.github.io/` | Canonical URL and structured data URL | `index.html` |
| `https://jun01ee.github.io/images/avatar.jpg` | Social preview image | `index.html` |
| `#main` | Skip link | `index.html` |
| `#top` | Brand and back-to-top link | `index.html` |
| `#projects` | Navigation and project call-to-action | `index.html` |
| `#capabilities` | Navigation | `index.html` |
| `#experience` | Navigation | `index.html` |
| `#contact` | Navigation | `index.html` |
| `/assets/Juno_Li_CV.pdf` | CV download and CV placeholder link | `index.html` |
| `mailto:juno.li.research@gmail.com` | Contact button and email link | `index.html` |

### External Profile Links

| Link | Label/use | Where |
| --- | --- | --- |
| `https://github.com/jun01ee` | GitHub profile | `index.html` |
| `https://gitlab.com/jun01ee` | GitLab profile | `index.html` |
| `https://www.linkedin.com/in/jun01ee/` | LinkedIn profile | `index.html` |
| `https://scholar.google.com/citations?user=Q0zwr3cAAAAJ&hl=en&authuser=1` | Google Scholar profile | `index.html` |

### Project Links

| Link | Project | Where |
| --- | --- | --- |
| `https://github.com/jun01ee/solar-yield-forecasting-pipeline` | Solar Yield Forecasting MLOps Pipeline | `assets/js/site-data.js` |
| `https://gitlab.com/jun01ee/data-engineering-zoomcamp` | Data Engineering Zoomcamp Capstone | `assets/js/site-data.js` |
| `https://github.com/jun01ee/OpenEvolve` | OpenEvolve AI Experiments | `assets/js/site-data.js` |

### Redirect Page Links

| Link | Use | Where |
| --- | --- | --- |
| `https://jun01ee.github.io/#projects` | Canonical target for old pages | `research.html`, `observation.html` |
| `./#projects` | Visible redirect fallback button | `research.html`, `observation.html` |

## Placeholders To Replace Or Confirm

### CV

- Title/label: `Download CV`, `CV placeholder`
- Path: `/assets/Juno_Li_CV.pdf`
- Current status: file not present in the branch.
- Task: add latest CV PDF or change the path in `index.html`.

### Hero Headshot

- Title/label: `Headshot image placeholder`
- Current image: `images/avatar.jpg`
- Task: confirm this image is current and professional enough for recruiters.

### Solar Yield Forecasting MLOps Pipeline

- Placeholder title: `Live 7-day forecast output will appear here.`
- Placeholder description: `Replace this with the latest forecast PNG or published output path when available.`
- Current embedding/image: placeholder graphic generated by CSS/JS, no real image.
- Preferred replacement: latest forecast PNG/output from the project.
- Update location: `assets/js/site-data.js`

### Spatially Resolved Galaxy Spectra Analysis Software

- Placeholder title: `Program architecture flowchart coming soon.`
- Placeholder description: `Preferred replacement: exported Miro SVG or PNG. A public Miro link can be added as a secondary link.`
- Current embedding/image: placeholder architecture graphic generated by CSS/JS.
- Preferred replacement: exported Miro SVG/PNG/PDF. Use public Miro link only as secondary support, not the only visual.
- Update location: `assets/js/site-data.js`

### Visualisation / Dashboarding Portfolio

- Placeholder title: `Dashboard screenshots coming soon.`
- Placeholder description: `Choose the business theme and add screenshots, KPI notes, and the future Power BI/Tableau/GitHub link.`
- Current embedding/image: placeholder dashboard graphic generated by CSS/JS.
- Preferred replacement: dashboard screenshots, KPI notes, data model/star schema, insight brief, and final repo or BI link.
- Update location: `assets/js/site-data.js`

### Data Engineering Zoomcamp Capstone

- Placeholder title: `Architecture diagram placeholder.`
- Placeholder description: `Add a pipeline diagram or README screenshot when ready.`
- Current embedding/image: placeholder pipeline graphic generated by CSS/JS.
- Preferred replacement: architecture diagram or README screenshot.
- Update location: `assets/js/site-data.js`

### OpenEvolve AI Experiments

- Placeholder title: `Experiment summary coming soon.`
- Placeholder description: `Add best result, scoring trace, or log screenshot.`
- Current embedding/image: placeholder AI/log graphic generated by CSS/JS.
- Preferred replacement: experiment summary, log screenshot, scoring trace, or best-result image.
- Update location: `assets/js/site-data.js`

### Large-Scale Astronomical Data Pipeline

- Current title/caption: `Schematic visual placeholder for archival image processing and overlap detection.`
- Current image: `images/mosaic.JPG`
- Current status: real image used as a placeholder-style visual.
- Preferred replacement: schematic, pipeline diagram, or clearer HST metadata/overlap visual.
- Update location: `assets/js/site-data.js`

### Beyond Work

- Running placeholder: `12 km`
- Running image: none yet.
- Travel image: `images/tibet.jpg`
- Photography/telescope image: `images/m8.jpg`
- Task: replace running placeholder with an actual race/training image only if desired. Verify travel and telescope thumbnails.

## Optional Content Decisions

- Decide whether to add a Canva CV link.
- Decide whether to include publications as a small secondary section.
- Decide whether to include work-rights/visa information.
- Decide whether the site should weight Data Science, Data Engineering, BI, and AI/ML equally or prioritise one track.
- Decide whether to keep `research.html` and `observation.html` as redirects for old URLs.

## Assets Not Referenced By The Current Website

These files are present but are not referenced by `index.html`, `research.html`, `observation.html`, `assets/js/site-data.js`, or the active stylesheet/scripts. Verify before deleting because some may still be useful source material for future screenshots or thumbnails.

### Unused Images

- `images/BLcam.JPG`
- `images/archery.jpg`
- `images/banner.jpg`
- `images/banner3.jpg`
- `images/dome.png`
- `images/m13.jpg`
- `images/m20.jpg`
- `images/m27.jpg`
- `images/m57.jpg`
- `images/m8.png`
- `images/mcmc.JPG`
- `images/model.JPG`
- `images/moon.jpg`
- `images/pic01.jpg`
- `images/pic02.jpg`
- `images/pic03.jpg`
- `images/radio.png`
- `images/residual-color-compare.png`
- `images/spec.JPG`

Recommended cleanup for a clean public branch:

```bash
git rm images/BLcam.JPG images/archery.jpg images/banner.jpg images/banner3.jpg images/dome.png
git rm images/m13.jpg images/m20.jpg images/m27.jpg images/m57.jpg images/m8.png
git rm images/mcmc.JPG images/model.JPG images/moon.jpg images/pic01.jpg images/pic02.jpg images/pic03.jpg
git rm images/radio.png images/residual-color-compare.png images/spec.JPG
```

Use `git rm` if you want these files gone from the new branch and from the deployed site. They will still exist in old commits/history.

### Unused Legacy JavaScript

These are from the old HTML5 UP template and are not loaded by the redesigned site.

- `assets/js/breakpoints.min.js`
- `assets/js/browser.min.js`
- `assets/js/jquery.min.js`
- `assets/js/jquery.scrollex.min.js`
- `assets/js/jquery.scrolly.min.js`
- `assets/js/main.js`
- `assets/js/util.js`

Recommended cleanup:

```bash
git rm assets/js/breakpoints.min.js assets/js/browser.min.js assets/js/jquery.min.js
git rm assets/js/jquery.scrollex.min.js assets/js/jquery.scrolly.min.js assets/js/main.js assets/js/util.js
```

### Unused Legacy Sass Sources

The redesigned site edits `assets/css/main.css` directly and does not compile Sass.

- `assets/sass/main.scss`
- `assets/sass/libs/_breakpoints.scss`
- `assets/sass/libs/_functions.scss`
- `assets/sass/libs/_html-grid.scss`
- `assets/sass/libs/_mixins.scss`
- `assets/sass/libs/_vars.scss`
- `assets/sass/libs/_vendor.scss`

Recommended cleanup:

```bash
git rm assets/sass/main.scss
git rm assets/sass/libs/_breakpoints.scss assets/sass/libs/_functions.scss assets/sass/libs/_html-grid.scss
git rm assets/sass/libs/_mixins.scss assets/sass/libs/_vars.scss assets/sass/libs/_vendor.scss
```

### Keep Unless Replacing Font Awesome

These are indirectly used by `assets/css/fontawesome-all.min.css` for icon rendering.

- `assets/css/fontawesome-all.min.css`
- `assets/webfonts/fa-brands-400.*`
- `assets/webfonts/fa-regular-400.*`
- `assets/webfonts/fa-solid-900.*`

If you remove Font Awesome icons from the HTML/JS, these can be removed too. Until then, keep them.

### Repo Metadata / Docs To Decide

- `.gitignore`: currently untracked and existed before the redesign work. Review whether it should be added or left untracked.
- `README.txt`: currently a short pointer to `README.md`. Remove it only if you do not need backward compatibility with the old template README filename.
- `LICENSE.txt`: keep if any old template or Font Awesome assets remain, or replace with a project-specific license decision.

## Untracking Vs Removing

For this redesign, the cleaner option is usually `git rm`, not `git rm --cached`.

Use `git rm` when:

- You want the file removed from the branch.
- You want GitHub Pages not to deploy it.
- You are happy for the old file to exist only in Git history.

Example:

```bash
git rm images/banner.jpg assets/js/jquery.min.js
git commit -m "Remove unused legacy site assets"
```

Use `git rm --cached` only when:

- You want Git to stop tracking a file, but keep your local copy on disk.
- You will add the path to `.gitignore`.
- You understand the file will still be removed from the branch for other people after commit.

Example:

```bash
git rm --cached path/to/local-only-file
```

Then add the path to `.gitignore` and commit both changes.

## Clean Branch Publication Plan

Goal: the public branch contains only the clean redesigned site. The old website remains only in Git history.

1. Finish replacements and cleanup on `2026-redesign`.
2. Remove unused legacy files with `git rm` after verifying the lists above.
3. Confirm the branch only contains files needed by the new static site.
4. Run checks:

```bash
git status --short
git diff --check
```

5. Preview locally:

```bash
python3 -m http.server 8000
```

6. Commit the redesign:

```bash
git add index.html assets/css/main.css assets/js/site-data.js assets/js/site.js README.md README.txt task.md research.html observation.html
git commit -m "Rebuild personal site for 2026 job search"
```

7. Push the redesign branch:

```bash
git push origin 2026-redesign
```

8. Make it public by merging into the current GitHub Pages publishing branch.

If the publishing branch is still `master` and it has not diverged:

```bash
git switch master
git merge --ff-only 2026-redesign
git push origin master
```

If GitHub Pages is configured to use `main`, use `main` instead of `master`.

Optional branch-name modernization:

- Rename the default branch from `master` to `main` in GitHub settings.
- Update GitHub Pages settings to publish from `main` and root.
- Only delete the remote `master` branch after GitHub confirms `main` is the default and Pages is serving correctly.

No separate old-site branch is required if you want the old site to exist only in history.

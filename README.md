# Juno Li portfolio site

Static GitHub Pages portfolio for recruiter-facing data science, data engineering, analytics engineering, AI/ML, BI, and research software roles.

## Preview locally

Open `index.html` directly in a browser, or run a small local server from the repo root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update content

Most recruiter-facing content is in `assets/js/site-data.js`:

- `snapshot`: short recruiter snapshot cards.
- `projects`: featured project cards, tags, highlights, links, and demo placeholders.
- `capabilities`: compact skills groups.
- `experience`: short timeline entries.
- `beyondWork`: compact secondary personal context and optional thumbnails.

Site structure, SEO metadata, hero copy, about copy, and contact links live in `index.html`.

## Replace placeholders

- Latest CV: add the PDF at `assets/Juno_Li_CV.pdf`.
- Headshot: replace `images/avatar.jpg`, or update the hero image path in `index.html`.
- Solar forecast output: update the Solar project demo in `assets/js/site-data.js` from `type: "placeholder"` to `type: "image"` and point `image` to the PNG.
- Miro architecture: replace `images/galaxy-software-architecture.svg` or update the Miro link in `assets/js/site-data.js` when the design changes.
- Dashboarding portfolio: choose a theme, add screenshots/diagrams to `images/`, then update the placeholder card.
- Data Engineering capstone: add an architecture diagram or README screenshot and update the project demo.
- OpenEvolve experiments: add a log screenshot, best-result image, or concise result summary.
- Beyond Work: replace the running placeholder or update travel/telescope thumbnails in `assets/js/site-data.js`.

Example image demo:

```js
demo: {
  type: "image",
  image: "images/solar-forecast.png",
  alt: "Seven-day solar irradiance forecast output",
  caption: "Latest daily forecast published by the scheduled pipeline."
}
```

## Deployment

This site has no build step. Commit changes to the branch configured for GitHub Pages, usually `master` or `main`, and GitHub Pages will serve the root `index.html`.

For this redesign branch:

```bash
git push origin 2026-redesign
```

After review, merge into the GitHub Pages publishing branch.

## Remaining materials to add

- Latest CV PDF.
- Preferred headshot/avatar.
- Project screenshots and architecture diagrams.
- Solar forecast PNG or published output path.
- Dashboard project theme and screenshots.
- Optional Canva CV link.
- Optional publications section.
- Optional work-rights/visa note.

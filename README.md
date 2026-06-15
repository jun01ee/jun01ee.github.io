# Juno Li portfolio site

Static GitHub Pages portfolio for recruiter-facing data science, data engineering, analytics engineering, AI/ML, BI, and research software roles.

## Preview locally

Open `index.html` directly in a browser, or run a small local server from the repo root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Where content lives

- `index.html`: page structure, SEO metadata, hero copy, about copy, contact links, and CV links.
- `assets/js/site-data.js`: snapshot cards, project cards, tags, highlights, links, capabilities, experience, and Beyond Work content.
- `assets/js/site.js`: rendering logic for cards, image fallbacks, and the image viewer.
- `assets/css/main.css`: site styling.
- `images/`: tracked portfolio images and diagrams.

## Common updates

- CV: add the latest PDF at `assets/Juno_Li_CV.pdf`, or change/remove the CV links in `index.html`.
- Portrait: replace `images/avatar.jpg`, or update the hero image and social preview paths in `index.html`.
- Social preview: add a wide `images/social-preview.jpg` and update `og:image` and `twitter:image` in `index.html`.
- Project content: edit the relevant object in `assets/js/site-data.js`.
- Project image: add the image under `images/`, then update the project `demo` object.
- Beyond Work content: edit `beyondWork` in `assets/js/site-data.js`.

Example image demo:

```js
demo: {
	type: "image",
	image: "images/example-project.png",
	alt: "Short description of the project visual",
	caption: "Public-facing caption for the project visual.",
	fit: "contain"
}
```

## Deployment

This site has no build step. Commit changes to the branch configured for GitHub Pages and GitHub Pages will serve the root `index.html`.

Before publishing:

```bash
git status --short
git diff --check
python3 -m http.server 8000
```

Then verify the local site in a browser, including mobile layout, project cards, image fallbacks, and CV download behavior.

## Still missing

- `assets/Juno_Li_CV.pdf` is not present yet, but `index.html` links to it.
- Hidden Dashboarding and OpenEvolve project entries still contain placeholder/planning copy in `assets/js/site-data.js`.
- Some visible copy still reads like internal launch wording, including labels such as `CV placeholder`, `Proof-of-work focus`, and `Evidence, demos, and work in progress`.
- A dedicated wide social preview image is optional but recommended.
- `images/tibet.jpg` appears unused and can be removed if it is no longer needed.

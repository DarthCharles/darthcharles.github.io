# Carlos Contreras — Portfolio

Personal portfolio site built with [Gatsby](https://www.gatsbyjs.com/). Live at **[darthcharles.github.io](https://darthcharles.github.io)**.

## Tech stack

- **Gatsby 2** — static site generator
- **React** — UI
- **Bootstrap 4** — layout and styling
- **YAML** — content for projects and blog (in `content/`)
- **gh-pages** — deploy to GitHub Pages

## Project structure

```
├── content/           # Editable content (no code)
│   ├── projects.yaml  # Project cards (title, subtitle, link, image)
│   └── blog.yml       # Blog post cards
├── src/
│   ├── components/    # Appbar, Info, Card, Layout, Link
│   ├── images/        # Favicon + images referenced in content
│   ├── pages/         # Routes: index, resume, projects, blog, 404
│   └── style.css      # Global styles
├── gatsby-config.js   # Site metadata, plugins, manifest (favicon)
└── package.json       # Scripts and dependencies
```

- **Home** — `src/pages/index.js` + `src/components/Info.js`
- **Resume** — `src/pages/resume.js` (experience, education, skills are in that file)
- **Projects / Blog** — data comes from `content/projects.yaml` and `content/blog.yml`; add images to `src/images/` and reference by filename in the YAML

## Local development

**Prerequisites:** Node.js (LTS), yarn or npm.

```bash
# Install dependencies
yarn install

# Start dev server (with hot reload)
yarn develop
```

Open **http://localhost:8000**. If you hit `ECONNRESET` or similar with `yarn develop`, try:

```bash
yarn clean
yarn install
yarn develop
```

Or use a clean build and serve the static output:

```bash
yarn build
yarn serve
```

Then open **http://localhost:9000**.

## Deploy (GitHub Pages)

The site is deployed by pushing the **built** site to the branch GitHub Pages uses (e.g. `master` or `main`). Source code stays on your working branch (e.g. `code`).

**One command:**

```bash
yarn deploy
```

This runs:

1. `gatsby build` — writes the static site to `public/`
2. `gh-pages -d public -b master` — pushes the contents of `public/` to the `master` branch

**If your GitHub Pages branch is `main` instead of `master`**, edit `package.json`:

```json
"deploy": "gatsby build && gh-pages -d public -b main"
```

**Typical workflow:**

1. Make changes on your branch (e.g. `code`).
2. Commit and push your branch if you want it in the repo.
3. Run `yarn deploy` from that branch. The `master` (or `main`) branch will be updated with only the built files; your repo will have both source and the deployed site.

No API keys or secrets are required; the project has no server or env vars for deployment.

## Scripts

| Script     | Command           | Description                          |
| ---------- | ----------------- | ------------------------------------ |
| `develop`  | `yarn develop`    | Dev server with hot reload           |
| `build`    | `yarn build`      | Production build into `public/`      |
| `serve`    | `yarn serve`      | Serve the built site (e.g. port 9000)|
| `clean`    | `yarn clean`      | Clear Gatsby cache and `public/`     |
| `deploy`   | `yarn deploy`     | Build and push to GitHub Pages branch|
| `format`   | `yarn format`     | Run Prettier on the codebase         |

## License

MIT.

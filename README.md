# Carlos Contreras — Portfolio

Personal profile and portfolio built with Gatsby 5 and React 19. The static site is hosted on GitHub Pages. [Visit darthcharles.github.io](https://darthcharles.github.io/)

## Branches

| Branch   | Role                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------- |
| `code`   | Editable source, dependencies, and this README. Start here.                                     |
| `master` | Default GitHub branch. Contains the generated site that GitHub Pages publishes from `/ (root)`. |

GitHub opens `master` by default, so select `code` to browse the source and README. [Source branch](https://github.com/DarthCharles/darthcharles.github.io/tree/code) · [GitHub Pages settings](https://github.com/DarthCharles/darthcharles.github.io/settings/pages)

## Run locally

Use Node.js 24 and Yarn Classic (1.x). With nvm, run `nvm install` once to install the version in `.nvmrc`, then use `nvm use` when returning to the project.

```sh
git switch code
nvm use
yarn install --frozen-lockfile
yarn develop
```

Open [localhost:8000](http://localhost:8000/). If Gatsby is serving stale output, stop the server and run `yarn clean` before restarting it. That clears `.cache/` and `public/`.

## Where to edit

| What                                           | Source                                                                                        |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Home and profile links                         | [src/pages/index.js](src/pages/index.js) and [src/components/info.js](src/components/info.js) |
| Resume, experience, and skills                 | [src/pages/resume.js](src/pages/resume.js)                                                    |
| Project cards                                  | [content/projects.yaml](content/projects.yaml)                                                |
| Blog cards                                     | [content/blog.yml](content/blog.yml)                                                          |
| Navigation and global styles                   | [src/components/appbar.js](src/components/appbar.js) and [src/workbench.css](src/workbench.css) |
| Site manifest, favicon, and Google Tag Manager | [gatsby-config.js](gatsby-config.js)                                                          |

Project and blog cards use `title`, `subtitle`, `link`, and `image`. Project cards also use `linkLabel` for the primary link and accept an optional `source` URL for a separate source link. Put card images in [src/images/](src/images/) and reference the exact filename in YAML.

## Preview and publish

From `code`, build and preview the production output locally.

```sh
yarn build
yarn serve
```

Open [localhost:9000](http://localhost:9000/) and check the pages you changed. When ready, commit the source changes on `code` and publish with a GitHub account that can push to the repository.

```sh
git push origin code
yarn deploy
```

`yarn deploy` builds the current working tree into `public/` and pushes that output to `master` on `origin`. It adds a `.nojekyll` file so GitHub Pages serves the generated files directly, including the `_gatsby/` directory. Pushing `code` saves the source changes. The deploy command publishes them separately. [Deployment history](https://github.com/DarthCharles/darthcharles.github.io/deployments)

[MIT license](LICENSE)

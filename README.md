# WestieDev

This is my main mono rerepo and was created using [Nx][def25].

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React][def6]
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular][def7]
  - `npm install --save-dev @nrwl/angular`
- [Nest][def8]
  - `npm install --save-dev @nrwl/nest`
- [Express][def9]
  - `npm install --save-dev @nrwl/express`
- [Node][def10]
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins][def23] you could add.

Also see these [recipes][def24]

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

 Run this generator to make a new library named is-even:

npx nx generate @nrwl/js:library is-even --publishable --importPath @myorg/is-even

This command:

Uses the @nrwl/js plugin's library generator to scaffold a new library named is-even.
The --publishable flag makes sure we also get a package.json generated and a publish target we can invoke to publish to NPM.
The --importPath allows us to define the name of the NPM package.

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@westie-dev/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

To build and test all my changes run:

- npx nx run-many --target=lint
- npx nx run-many --target=build
- npx nx run-many --target=test

Run `nx test my-app` to execute the unit tests via [Jest][def21].

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress][def22].

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Working in a dev container

[Going further with Dev Containers - Code With Engineering Playbook][def3]

[Dev Container Features (visualstudio.com)][def4]

[Nx Slack - Are there any docs/recommendations on working with Nx in a dev container?][def5]

## In Process

See

- [Dev Container Features: Self Authoring Template][def]

- [use mdx on github - Search (bing.com)][def2]

- [Getting Started with Integrated Repos | Nx][def11]
  
- [Create a Next.js web app with Nx. In this article, we’re going to explore… | by Juri Strumpflohner | Nx Devtools (nrwl.io)][def12]

    - [Juri's repo][def13]

    - [My Old Repo based on articles][def14]

## Markdown

See these articles on creating good Markdown:

[Markdown - Tutorials](https://www.w3schools.io/file/markdown-introduction/)

[Markdown Style Guide][def20]

[USE MARKDOWN LINT TO CHECK YOUR MARKDOWN FILES FOR ERRORS][def18]
[markdownlint][def19]

[Markdown : center image][def16]

[markdownlint][def17]

Also see [MDX - Markdown for the component era](https://github.com/mdx-js/mdx)

## HTML

[How To Build a Website with HTML](https://www.digitalocean.com/community/tutorial_series/how-to-build-a-website-with-html)

## Publish your packages

Publishing my packages to [npm/westie-dev](https://www.npmjs.com/settings/westie-dev/packages):

- cd dist/packages/lib/
- npm publish --access public

The '-access' option is only needed when first adding a new package.

See this article [Publishable libraries with Nx Monorepo - part 1 - DEV Community][def26]

[Publishable and Buildable Nx Libraries](<https://nx.dev/more-concepts/buildable-and-publishable-libraries>)

TODO: #1 Need to find more articles on publising see [slack question](<https://nrwlcommunity.slack.com/archives/CMFKWPU6Q/p1669484241637909>)

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation][def25] to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud][def15] to learn more.

![NX Logo](https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png)

[def]: https://github.com/devcontainers/feature-starter
[def2]: https://www.bing.com/search?q=use+mdx+on+github&form=ANNTH1&refig=f1e603068a8f45808fa6197f0e916d01
[def3]: https://microsoft.github.io/code-with-engineering-playbook/developer-experience/going-further/
[def4]: https://code.visualstudio.com/blogs/2022/09/15/dev-container-features
[def5]: https://nrwlcommunity.slack.com/archives/CMFKWPU6Q/p1669559658754119
[def6]: https://reactjs.org
[def7]: https://angular.io
[def8]: https://nestjs.com
[def9]: https://expressjs.com
[def10]: https://nodejs.org
[def11]: https://nx.dev/getting-started/integrated-repo-tutorial
[def12]: https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613
[def13]: https://github.com/juristr/blog-series-nextjs-nx
[def14]: https://github.com/mwoodpatrick/blog-series-nextjs-nx
[def15]: https://nx.app/
[def16]: https://dev.to/bdavidxyz/markdown-center-image-39j1#:~:text=Markdown%20%3A%20center%20image%201%20Solution%201%20%3A,where%20you%20have%20control%20over%20CSS%20styles%20
[def17]: https://github.com/DavidAnson/markdownlint/blob/v0.26.2/doc/Rules.md#md033
[def18]: https://whatismarkdown.com/use-markdown-lint-to-check-your-markdown-files-for-errors/
[def19]: https://github.com/DavidAnson/markdownlint
[def20]: https://cirosantilli.com/markdown-style-guide/#top-level-header
[def21]: https://jestjs.io
[def22]: https://www.cypress.io
[def23]: https://nx.dev/community
[def24]: https://github.com/nrwl/nx-recipes
[def25]: https://nx.dev
[def26]: https://dev.to/agroupp/publishable-libraries-with-nx-monorepo-part-1-1ae
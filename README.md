# WestieDev

This is my main mono rerepo and was created using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

Also see these [recipes](https://github.com/nrwl/nx-recipes)

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

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## In Process

See

- [Getting Started with Integrated Repos | Nx](https://nx.dev/getting-started/integrated-repo-tutorial)
  
- [Create a Next.js web app with Nx. In this article, we’re going to explore… | by Juri Strumpflohner | Nx Devtools (nrwl.io)](https://blog.nrwl.io/create-a-next-js-web-app-with-nx-bcf2ab54613)

- [Juri's repo](https://github.com/juristr/blog-series-nextjs-nx)

- [My Old Repo based on articles](https://github.com/mwoodpatrick/blog-series-nextjs-nx)

## Markdown

See these articles on creating good Markdown:

[Markdown - Tutorials](https://www.w3schools.io/file/markdown-introduction/)

[Markdown Style Guide](https://cirosantilli.com/markdown-style-guide/#top-level-header)

[USE MARKDOWN LINT TO CHECK YOUR MARKDOWN FILES FOR ERRORS](https://whatismarkdown.com/use-markdown-lint-to-check-your-markdown-files-for-errors/)
[markdownlint](https://github.com/DavidAnson/markdownlint)

[Markdown : center image](https://dev.to/bdavidxyz/markdown-center-image-39j1#:~:text=Markdown%20%3A%20center%20image%201%20Solution%201%20%3A,where%20you%20have%20control%20over%20CSS%20styles%20)

[markdownlint](https://github.com/DavidAnson/markdownlint/blob/v0.26.2/doc/Rules.md#md033)

Also see [MDX - Markdown for the component era](https://github.com/mdx-js/mdx)

## HTML

[How To Build a Website with HTML](https://www.digitalocean.com/community/tutorial_series/how-to-build-a-website-with-html)

## Publish your packages

See this article [Publishable libraries with Nx Monorepo - part 1 - DEV Community](https://dev.to/agroupp/publishable-libraries-with-nx-monorepo-part-1-1ae)

TODO: #1 Need to find more articles on publising see [slack question](<https://nrwlcommunity.slack.com/archives/CMFKWPU6Q/p1669484241637909>)

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

![NX Logo](https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png)

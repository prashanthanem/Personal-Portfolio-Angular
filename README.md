# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.x.

## Prerequisites

- Node.js LTS (18.x or 20.x recommended)
- npm (included with Node) or yarn

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

Optionally run:
- `ng serve --open` to start and open the app in the default browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` or `ng build` to build the project. Use the production configuration for an optimized build:

```bash
npm run build:prod
```

Production build notes:
- `--configuration production` enables optimization, output hashing and other production flags.
- Assets are placed in `dist/portfolio` by default.

## Linting & Formatting

This project uses ESLint and Prettier. Run:

```bash
npm run lint
npm run format
```

Add `npx ng add @angular-eslint/schematics` to fully integrate Angular ESLint rules if not already scaffolded.

## Running unit tests

Run `npm test` or `ng test` to execute unit tests via Karma (default).

## Continuous Integration (suggested)

Add a CI workflow that runs `npm ci`, `npm run lint`, `npm test`, and `npm run build:prod` on each PR. A GitHub Actions template is included in `.github/workflows/ci.yml`.

## Best practices for Angular 20 projects

- Keep Angular packages and CLI/tooling aligned to the same 20.3.x line and use `ng update` to handle migrations.
- Keep `strict` and `strictTemplates` enabled (this repo already has them enabled).
- Move runtime libraries (like `bootstrap` and browser libs) to `dependencies` (they were moved).
- Use lazy-loaded feature modules for larger sections to reduce initial bundle size.
- Optimize images (convert to WebP where possible) and compress assets before committing.
- Add `engines` or `.nvmrc` to pin supported Node versions for consistent CI builds.

## Further help

To get more help on the Angular CLI use `ng help` or see the [Angular CLI Overview and Command Reference](https://angular.io/cli).

# Benrover website

## Requirements

- Node.js 24.x (use `nvm install` and `nvm use` in this directory).
- npm 11.x; the project specifies npm 11.21.0.

Install dependencies with `npm ci`. Commit `package-lock.json` when updating
dependencies so local and deployment builds use the same versions.

## Commands

- `npm start`: run the development server.
- `npm run build`: generate the production site in `build/`.
- `npm test -- --watchAll=false`: run tests once.

The app uses React 19 and React Router 7. Three.js stays on
the 0.183 series to satisfy `@google/model-viewer`'s peer requirement.
Use Node.js 24.x in the deployment provider's runtime settings as well.

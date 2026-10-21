# continue reviewer notes

## Architecture

This is a small Vite-powered React single-page starter application. `src/main.jsx` mounts `App` under `StrictMode` and imports the global stylesheet; `src/App.jsx` composes the page from focused components and static feature data. UI components live under `src/components/`, while content collections are kept in `src/data/`.

## Conventions

- Use functional React components with default exports, as in `src/components/Brand.jsx`, `FeatureCard.jsx`, and `HeroArt.jsx`.
- Keep reusable page sections in separate files under `src/components/`; `App.jsx` should primarily compose sections rather than contain all markup.
- Store repeated/static content outside components. The feature cards are defined in `src/data/features.js` and rendered with `features.map(...)` in `src/App.jsx`.
- Use explicit `.jsx` and `.js` extensions in local imports, e.g. `./components/Brand.jsx` and `./data/features.js`.
- Use React state locally for simple interaction. `App.jsx` uses `useState(false)` for the “Start building” button and derives its label from `started`.
- Preserve semantic HTML and accessibility attributes: navigation uses `<nav aria-label="Main navigation">`, features use a labeled `<section>`, and the decorative arrow is hidden with `aria-hidden="true"` (`src/App.jsx`).
- Components receive data through destructured props. `FeatureCard` accepts `{ number, title, description }` and uses the supplied `number` as the list rendering key (`src/components/FeatureCard.jsx`, `src/App.jsx`).
- Follow the existing lightweight formatting style: single quotes in JavaScript, trailing commas in multiline calls/configuration, and minimal component wrappers.
- Vite configuration remains minimal and uses the React plugin (`vite.config.js`). The project is ESM (`"type": "module"` in `package.json`).

## Intentional non-standard choices

- `HeroArt` is CSS/DOM-generated artwork rather than an image or SVG. Its outer `<div>` deliberately uses `role="img"` with an `aria-label` while child shapes remain plain empty `<div>` elements (`src/components/HeroArt.jsx`).
- The app is intentionally a single-page starter with no router, API layer, or test/build tooling beyond Vite; the feature copy explicitly presents adding routes and data as future growth (`src/data/features.js`).
- The external React documentation link intentionally opens in a new tab and uses `rel="noreferrer"` (`src/App.jsx`).

## Watch out for

- Do not replace the stable `feature.number` key with array indexes when extending the feature list (`src/App.jsx`).
- Avoid moving static feature content into component state or duplicating card markup; update `src/data/features.js` and preserve the `FeatureCard` prop shape.
- Preserve the accessibility behavior when changing the hero artwork: the parent provides the image alternative, and decorative descendants should not become separately announced (`src/components/HeroArt.jsx`).
- Keep external links’ `target="_blank"` paired with `rel="noreferrer"` (`src/App.jsx`).
- Changes to the button interaction should preserve its state-derived label and avoid introducing navigation unless the starter’s intentionally local behavior is being replaced (`src/App.jsx`).
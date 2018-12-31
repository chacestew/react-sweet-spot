## React Sweet Spot

Skeleton for a modern ([PWA to-do](#to-do)) React frontend applicaton and server with great developer utility. Hopefully up to date.

### Features

- [Webpack 4](https://webpack.js.org/) and [Babel 7](https://babeljs.io/)
- Universal React ([@loadable/server](https://github.com/smooth-code/loadable-components/tree/master/packages/server))
- Component code splitting ([@loadable/component](https://github.com/smooth-code/loadable-components/tree/master/packages/component))
- CSS-in-JS ([styled-components](https://github.com/styled-components/styled-components))
- Hot module reloading on client and server ([react-hot-loader](https://github.com/gaearon/react-hot-loader) and [webpack-hot-server-middleware](https://github.com/60frames/webpack-hot-server-middleware))

### Setup

`npm i` then `npm start` for dev or `npm run build && npm run serve` for prod

**Linting**: Install the `eslint` plugin for your editor and enable `autoFixOnSave` (settings aready included for VS Code).

### Reasoning

> Why @loadable over React.Lazy for code splitting?

React Suspense doesn't support server rendering yet. `@loadable` gives us a few tools to do so: `@loadable/server`, `@loadable/babel-plugin` and `@loadable/webpack-plugin`. It was chosen for its clean API, good documentation and because it has the React team's recommendation.

> Why CSS-in-JS?

It is the natural sidekick to code splitting as CSS co-exists with JS. The patterns it provides to declare reusable styles help to keep a codebase small and intentional. `styled-components` has great documentation, frequent updates and a big community. I haven't noticed runtime perf problems yet.

> What is webpack-hot-server-middleware?

`webpack-hot-server-middleware` can watch for source changes and make hot updates to the server renderer. This is helpful to keep SSR working in development to approximate production, without having to restart the node process continually. To make it work with code splitting, the server bundle is created as a single chunk via `webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })`.

### To do

- service worker cache
- manifest.json
- html meta

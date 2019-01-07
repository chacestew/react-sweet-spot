/* eslint-disable global-require, import/no-unresolved */
const express = require('express');
const ignoreFavicon = require('express-no-favicons');

const app = express();
app.use(ignoreFavicon());
app.use('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow:');
});

const start = () => {
  const mode = process.env.NODE_ENV;
  const port = 8000;
  app.listen(8000, () => {
    console.info(`[${mode}] server listening on :${port}`);
  });
};

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const clientConfig = require('./webpack/client.dev');
  const serverConfig = require('./webpack/server.dev');
  const compiler = webpack([clientConfig, serverConfig]);

  const webpackDevServer = webpackDevMiddleware(compiler, {
    serverSideRender: true,
    overlay: true,
    hot: true,
    stats: {
      warnings: false,
      colors: true,
      timings: true,
    },
    publicPath: clientConfig.output.publicPath,
  });
  app.use(webpackDevServer);
  app.use(webpackHotMiddleware(compiler.compilers[0]));
  app.use(webpackHotServerMiddleware(compiler));

  webpackDevServer.waitUntilValid(start);
} else {
  const expressStaticGzip = require('express-static-gzip');
  const render = require('./build/server').default;
  const clientStats = require('./build/stats.json');

  app.use(
    '/public',
    expressStaticGzip('dist', {
      enableBrotli: true,
      index: false,
      orderPreference: ['br'],
    })
  );
  app.use(render({ clientStats }));
  start();
}

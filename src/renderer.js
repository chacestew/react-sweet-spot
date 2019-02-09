import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { ChunkExtractor } from '@loadable/server';
import { Helmet } from 'react-helmet';
import App from './App/App';

export default ({ clientStats }) => (req, res) => {
  const chunks = new ChunkExtractor({ stats: clientStats });
  const styles = new ServerStyleSheet();

  const context = {};
  const html = renderToString(
    chunks.collectChunks(
      styles.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    )
  );
  const helmet = Helmet.renderStatic();
  const styleTags = styles.getStyleTags();
  const scriptTags = chunks.getScriptTags();

  res.send(`<!DOCTYPE html>
<html lang="en" ${helmet.htmlAttributes.toString()}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${styleTags}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${html}</div>
    ${scriptTags}
  </body>
</html>`);
};

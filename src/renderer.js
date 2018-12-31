import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { ChunkExtractor } from '@loadable/server';
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
  const styleTags = styles.getStyleTags();
  const scriptTags = chunks.getScriptTags();

  res.send(`<!doctype html>
    <html>
    <head>
        <title>App</title>
        ${styleTags}
    </head>
    <body>
        <div id="root">${html}</div>
        ${scriptTags}
    </body>
    </html>
`);
};

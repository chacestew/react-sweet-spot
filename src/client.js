import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from './App/App';

const rootElement = document.getElementById('root');

loadableReady(() => {
  hydrate(
    <Router>
      <App />
    </Router>,
    rootElement
  );
});

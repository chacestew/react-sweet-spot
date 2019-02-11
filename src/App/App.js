import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { Helmet } from 'react-helmet';

import TopNav from './Common/TopNav';
import Main from './Common/Main';

import Home from './Pages/Home';
import Cat from './Pages/Cat';
import Dog from './Pages/Dog';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    background-color: lavender;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;

    #root {
    display: flex;
    flex-direction: column;
    }
  }
`;

const App = () => (
  <>
    <Helmet defaultTitle="Home" titleTemplate="%s - React Sweet Spot" />
    <GlobalStyle />
    <header>
      <TopNav />
    </header>
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/cat" component={Cat} />
      <Route path="/dog" component={Dog} />
    </Main>
  </>
);

export default hot(App);

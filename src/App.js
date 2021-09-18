import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-family: Montserrat, sans-serif;
  font-weight: normal;
  line-height: 1.69;
  color: #93918f;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/search">Search</Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;

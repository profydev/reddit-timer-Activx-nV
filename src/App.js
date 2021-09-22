import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import FooterSearch from './components/FooterSearch';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';

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
  const URL = useSelector((state) => state.URL.url);
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
        <Switch>
          {URL.includes('/search/') || URL.includes('/search/') ? <FooterSearch /> : <Footer />}
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;

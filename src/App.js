import React from 'react';
import styled from 'styled-components';
// import { Router } from 'react-router-dom';

import Header from './components/Header';

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  color: #636363;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
// import { Router } from 'react-router-dom';

import Header from './components/Header';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-size: 16px;
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

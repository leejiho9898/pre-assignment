import React from 'react';
import styled from 'styled-components';
import Routing from './router/route';

function App() {
  return (
    <Applayout>
      <Routing />
    </Applayout>
  );
}

const Applayout = styled.div`
  background-color: #fafafa;
  height: 100vh;
`;

export default App;

import React from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
)

export default App;

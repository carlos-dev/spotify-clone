import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";

import "./config/reactotron";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import Header from "./components/header";
import ErrorBox from "./components/ErrorBox";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />

        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;

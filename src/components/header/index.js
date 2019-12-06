import React, { Component } from 'react';
import { Container, Search, User } from './style';

// import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Search>
          <input placeholder="search" />
        </Search>

        <User>
          <img src="https://avatars0.githubusercontent.com/u/31482507?v=4" alt="avatar" />
          Carlos André
        </User>
      </Container>
    )
  }
}

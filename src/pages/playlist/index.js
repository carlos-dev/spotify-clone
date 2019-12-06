import React, { Component } from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/imges/clock.svg';
import PlusIcon from '../../assets/imges/plus.svg';

export default class Playlist extends Component {
  render() {
    return (
      <Container>
        <Header>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s" alt="musica" />

          <div>
            <span>PLAYLIST</span>
            <h1>Rock</h1>
            <p>12 músicas</p>

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th><img src={ClockIcon} alt="duração" /></th>
          </thead>

          <tbody>
            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Link Park</td>
              <td>Hybrid Theory</td>
              <td>3:27</td>
            </tr>

            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Link Park</td>
              <td>Hybrid Theory</td>
              <td>3:27</td>
            </tr>

            <tr>
              <td><img src={PlusIcon} alt="Adicionar" /></td>
              <td>Papercut</td>
              <td>Link Park</td>
              <td>Hybrid Theory</td>
              <td>3:27</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}

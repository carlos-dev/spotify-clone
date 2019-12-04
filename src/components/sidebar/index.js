import React, { Component } from 'react';

import { Container, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/imges/add_playlist.svg'

export default class componentName extends Component {
  render() {
    return (
      <Container>
        <div />

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

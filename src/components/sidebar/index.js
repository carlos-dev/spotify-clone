import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/imges/add_playlist.svg'

export default class Sidebar extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <div>
          <Nav weightBold>
            <li>
              <a href="">Navegar</a>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            <li>
              <a href="">As Melhores do Rock</a>
            </li>
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({

})

import React, { Component } from 'react';

import { Container, Title, List, Playlist } from './styles';

export default class Browse extends Component {
  render() {
    return (
       <Container>
         <Title>Navegar</Title>

         <List>
           <Playlist to="/playlists/1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s" alt="musica" />

             <strong>Rock dos bons</strong>
             <p>Relaxe enquanto você coda</p>
           </Playlist>

           <Playlist to="/playlists/1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s" alt="musica" />

             <strong>Rock dos bons</strong>
             <p>Relaxe enquanto você coda</p>
           </Playlist>

           <Playlist to="/playlists/1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s" alt="musica" />

             <strong>Rock dos bons</strong>
             <p>Relaxe enquanto você coda</p>
           </Playlist>

           <Playlist to="/playlists/1">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpz9c7qrYEluBY8OvRW4oRln_wgyhrvgo5gab9fVoGDCvwQ9t&s" alt="musica" />

             <strong>Rock dos bons</strong>
             <p>Relaxe enquanto você coda</p>
           </Playlist>
         </List>
       </Container>
    )
  }
}

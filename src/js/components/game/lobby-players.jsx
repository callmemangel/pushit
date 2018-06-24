import React from 'react';
import LobbyPlayer from './lobby-player.jsx';

var LobbyPlayers = props => {
  var players = props.players.map((player, index) => {
    return (
      <LobbyPlayer key={index}/> 
    )
  });

  return (
    <div className='lobby-players'>
      {players} 
      <p>Waiting for players</p>
    </div>
  )
}

export default LobbyPlayers;

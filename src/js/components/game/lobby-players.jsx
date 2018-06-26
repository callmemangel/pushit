import React from 'react';
import LobbyPlayer from './lobby-player.jsx';
import styled from 'styled-components';
import { palette } from '../../styled-components';

const Players = styled.div`
  width: 65%;
  height: 100%;
`
const Title = styled.p` 
  color: ${palette.RED};
  font-size: 24px;
  text-align: center;
`;

var LobbyPlayers = props => {
  var players = props.players.map((player, index) => {
    return (
      <LobbyPlayer key={index}/> 
    )
  });

  return (
    <Players>
      {players} 
      <Title>Waiting for players</Title>
    </Players>
  )
}

export default LobbyPlayers;

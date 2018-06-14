import React from 'react';

handleStartClick() {
  window.ee.emit('GAME_START');
} 

var Lobby = () => (
  <div className='lobby'>
    <LobbyInfo />
    <LobbyInviteCode />
    <button onClick={this.handleStartClick}>Start</button>
    <Players />
  </div>
) 

export default Lobby;

import React, { Component } from 'react';

import LobbyPlayers from './lobby-players.jsx';
import Invite from './invite.jsx';
import LobbyInfo from './lobby-info.jsx';

function renderButtons (pageMode, isActive) {
  let buttons = [];
  if (pageMode === 'start') {
    buttons.push(
      <button key={1} onClick={this.handleGenClick}>
        Generate
      </button>
    );
    buttons.push(
      <button key={2} onClick={this.handleOnlineClick}>
        play online
      </button>
    );
    buttons.push(
      <button key={3} onClick={this.handleModeClick}>
        Gamemode: {this.state.gameMode}
      </button>
    );
  } else if (pageMode === 'wait-friends') {
    buttons.push(
      <button 
        className='game-start-btn' 
        disabled={isActive} 
        onClick={this.handleStartClick}
        key={4}
      >Start</button>
    );
  }

  return (
    <div className='start-buttons'>
      {buttons}
    </div>
  )
}

export default class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      gameMode: 'single',
    }

    this.handleGenClick = this.handleGenClick.bind(this);
    this.handleOnlineClick = this.handleOnlineClick.bind(this);
    this.handleModeClick = this.handleModeClick.bind(this);
    this.renderButtons = renderButtons.bind(this); 
  }
 

  handleGenClick() {
    window.ee.emit('GENERATE', this.state.gameMode );
  }

  handleOnlineClick() {
    window.ee.emit('PLAY_ONLINE', this.state.gameMode);
  }
  
  handleModeClick() {
    this.setState(prevState => (
      { gameMode: prevState.gameMode === 'single' ? 'multi' : 'single' }
    ));
  }

  handleStartClick() {
    window.ee.emit('GAME_START');
  }

  render() {
    let mode = this.props.mode;
    let code = this.props.code;
      
    let lobbyInfo = null;
    let lobbyPlayers = null;
    if (mode === 'wait-friends' || mode === 'wait-online') {
      lobbyInfo = <LobbyInfo/>; 
      lobbyPlayers = <LobbyPlayers  players={this.props.players}/>
    }

    return (
      <div className='lobby'>
        {lobbyInfo}
        <Invite code={code} mode={mode} /><br/>
        {this.renderButtons(mode, !code)}
        {lobbyPlayers}
      </div>
    ) 
  }
}

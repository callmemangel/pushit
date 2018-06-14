import React, { Component } from 'react';

import LobbyPlayers from './lobby-players.jsx';
import Invite from './invite.jsx';
import LobbyInfo from './lobby-info.jsx';

var renderButtons = function (pageMode, isActive) {
  if(pageMode == 'start') {
    return (
      <div className='start-buttons'>
        <button onClick={this.handleGenClick}>Generate</button>
        <button onClick={this.handleOnlineClick}>play online</button>
        <button onClick={this.handleModeClick}>Gamemode: {this.state.gameMode}</button>
      </div>
    ) 
  } else if (pageMode == 'wait-friends') {
    let style = {
      marginLeft: '80px',
      marginTop: '100px'
    };

    return (
      <div className='start-buttons'>
        <button 
          className='game-start-btn'
          disabled={isActive}
          onClick={this.handleStartClick}
          style={style}
        >Start</button>
      </div>
    ) 
  } else if (pageMode == 'wait-online') {
    let style = {
      marginLeft: '80px',
      marginTop: '100px'
    };

    return (
      <div className='start-buttons'>
        <button 
          className='game-start-btn'
          onClick={this.handleStartClick}
          style={style}
        ></button>
      </div>
    ) 

  }
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
    this.setState({ gameMode: 
                      this.state.gameMode == 'single' ? 'multi' : 'single' });
  }

  handleStartClick() {
    alert('game start click');
    window.ee.emit('GAME_START');
  }

  render() {
    return (
      <div className='lobby'>
        <LobbyInfo mode={this.props.mode} />
        <Invite code={this.props.code} mode={this.props.mode} /><br/>
        {this.renderButtons(this.props.mode, !this.props.code)}
        <LobbyPlayers mode={this.props.mode} players={this.props.players} />
      </div>
    ) 
  }

}

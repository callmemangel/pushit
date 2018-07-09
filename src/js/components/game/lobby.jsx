import React, { Component } from 'react';

import LobbyPlayers from './lobby-players.jsx';
import Invite from './invite.jsx';
import LobbyInfo from './lobby-info.jsx';
import { Button, CenterWrapper, Container } from '../../styled-components';

const OffsetButton1 = Button.extend`
  margin-top: -35px;
`;

const OffsetButton2 = Button.extend`
  margin-top: -20px;
  margin-left: 55px;
`

const CustomContainer = Container.extend`
  height: 40%;
`

function renderButtons (pageMode, isActive, playersLen) {
  let buttons = [];
  if (pageMode === 'start') {
    buttons.push(
      <Button red bold fontSize='90px' key={1} onClick={this.handleGenClick}>
        Generate
      </Button>
    );
    buttons.push(
      <OffsetButton1 pink bold fontSize='70px' key={2} onClick={this.handleOnlineClick}>
        play online
      </OffsetButton1>
    );
    buttons.push(
      <OffsetButton2 blue bold fontSize='36px' key={3} onClick={this.handleModeClick}>
        Gamemode: {this.state.gameMode}
      </OffsetButton2>
    );
  } else if (pageMode === 'wait-friends') {
    buttons.push(
      <Button 
        red bold fontSize='80px'
        disabled={isActive || playersLen < 2} 
        onClick={this.handleStartClick}
        key={4}
      >Start</Button>
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
    let players = this.props.players;
    let lobbyInfo = null;
    let lobbyPlayers = null;

    if (mode === 'wait-friends' || mode === 'wait-online') {
      lobbyInfo = <LobbyInfo/>; 
      lobbyPlayers = <LobbyPlayers  players={this.props.players}/>;
    } 

    
    return (
      <CenterWrapper>
        <Container>
          {lobbyInfo}
        </Container>
        <Container right>
          <Invite code={code} mode={mode} />
        </Container>
        <Container>
          {this.renderButtons(mode, !code, players.length)}
        </Container>
        <CustomContainer right>
          {lobbyPlayers}
        </CustomContainer>
      </CenterWrapper>
    ) 
  }
}

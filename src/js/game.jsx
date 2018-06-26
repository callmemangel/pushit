import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import EventEmitter from 'event-emitter';
import SetupSocket from './setupGameWs.js';

import Lobby from './components/game/lobby.jsx';
import Field from './components/game/field.jsx';
import WinnerScreen from './components/game/winner-screen.jsx';


import '../less/reset.less';
window.ee = new EventEmitter();

class Game extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'start', //play, wait-friend, wait-online, winner 
      winnerColorIndex:2,
      code: '',
      players: []
    } 

    this.setupWebSocket = SetupSocket.bind(this);
    this.setCoords = this.setCoords.bind(this);
  }

  setCoords(coords) {
    let players = this.state.players;
    coords = coords.split('.');

    for (let i = 0; i < players.length; i++) {
      players[i].x = coords[i * 2];
      players[i].y = coords[i * 2 + 1];
    }

    this.setState({ players: players });
  };

  componentDidMount() {
    window.ee.on('GENERATE', gameMode => {
      this.setState({ 
        mode: 'wait-friends'
      });

      axios.post('/generate', { mode: gameMode })
        .then(res => {
          let code = res.data;
          this.ws = this.setupWebSocket(code, gameMode);
          this.setState({ code: code });
        })
       
    });

    window.ee.on('PLAY_ONLINE', gameMode => {
      this.setState({ mode: 'wait-online' });
      axios.post('/generate', { mode: gameMode })
        .then(res => {
          let code = res.data;
          this.ws = this.setupWebSocket(code, gameMode);
          this.setState({ code: code });
        })
    });

    window.ee.on('GAME_START', () => {
      this.ws.send(JSON.stringify({type: 'GAME_START'}));
      this.setState({ mode: 'play' });
    });

    window.ee.on('PLAY_AGAIN', () => {
      this.ws.send(JSON.stringify({ type: 'PLAY_AGAIN' }));
      this.setState({ mode: 'play' });
    });

    window.ee.on('NEW_GAME', () => {
      this.ws.send(JSON.stringify({ type: 'DISCONNECT' }));
      this.setState({ mode: 'start', players: [], code: '' });
    });
  }

  render() {
    if (this.state.mode == 'play') {
      return <Field players={this.state.players} /> 
    } else if (this.state.mode == 'winner') {
      return <WinnerScreen color={this.state.winnerColorIndex} /> 
    }
    return <Lobby code={this.state.code} players={this.state.players} mode={this.state.mode} />
  }
}

render(<Game />, document.getElementById('root'));

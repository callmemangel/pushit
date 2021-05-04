import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import EventEmitter from 'event-emitter';
import styled from 'styled-components';

import Invite from'./components/controls/invite.jsx';
import Buttons from './components/controls/buttons.jsx';
import PlayInfo from './components/controls/play-info.jsx';
import GameOver from './components/controls/game-over.jsx';
import StartScreen from './components/controls/start-screen.jsx';
import WaitScreen from './components/controls/wait-screen.jsx';

import setupWebSocket from './setupControlsWs.js';

import '../less/reset.less';

import { CenterWrapper } from './styled-components';

const Div = styled.div`
  height: 100%;
`;

window.ee = new EventEmitter();

export default class Controls extends Component {
  constructor(props) {
    super(props);  
    
    this.state = {
      colorIndex: null,
      mode: 'start', //wait, play, game over 
      isWinner: false 
    }


    this.setupWebSocket = setupWebSocket.bind(this);
  }
  
  componentDidMount() {
    window.ee.on('START_MOVE', (vector) => {
      switch(vector) {
      case 'up':
        this.socket.emit('1');
        break;
      case 'right':
        this.socket.emit('2');
        break;
      case 'down':
        this.socket.emit('3');
        break;
      case 'left':
        this.socket.emit('4');
        break;
      case 'push':
        this.socket.emit('P');
      }
    });

    window.ee.on('MOVE_END', () => {
      this.socket.emit('E'); 
    });

    window.ee.on('PLAY_AGAIN', () => {
      this.socket.emit('PLAY_AGAIN');
    });

    window.ee.on('STOP_GAME', () => {
      this.socket.emit('DISCONNECT');
    });

    window.ee.on('CONNECT_START', code => {
      axios.post('/connect', { code: code })
        .then(res => {
          if (res.data == false) {
            window.ee.emit('WRONG_CODE'); 
            return;
          }
          this.socket = this.setupWebSocket(code);
          this.setState({ mode: 'connecting', code: '' });
        })
    })
  } 

  render() {
    let mode = this.state.mode;
    return (
      <Div>
        {mode === 'start' && <StartScreen/>}
        {mode === 'connection' || mode === 'wait' ?
             <WaitScreen mode={this.state.mode}/> : 
             null
        }
        {mode === 'play' && <Buttons colorIndex={this.state.colorIndex}/>}
        {mode === 'game-over' && <GameOver winner={this.state.isWinner}/>}
        {mode === 'err' && <h1>Error, something went wrong</h1>}
      </Div>
    );
  }
}

render(<Controls />, document.getElementById('root'));

import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Timer from './components/timer.jsx';
import Invite from'./components/invite.jsx';
import ControlButtons from './components/control-buttons.jsx';
import PlayInfo from './components/play-info.jsx';
import GameOver from './components/game-over.jsx';
import EventEmitter from 'event-emitter';

import setupWebSocket from './setupControlsWs.js';

window.ee = new EventEmitter();

export default class Controls extends Component {
  constructor(props) {
    super(props);  
    
    this.state = {
      colorIndex: 1,
      mode: 'connect-start', //wait, play, game over 
      isWinner: false 
    }

    this.handleStartClick = this.handleStartClick.bind(this);
    this.setupWebSocket = setupWebSocket.bind(this);
  }
  
  componentDidMount() {
    window.ee.on('START_MOVE', (vector) => {
      switch(vector) {
      case 'up':
        this.ws.send('MOVE_UP');
        break;
      case 'right':
        this.ws.send('MOVE_RIGHT');
        break;
      case 'down':
        this.ws.send('MOVE_DOWN');
        break;
      case 'left':
        this.ws.send('MOVE_LEFT');
        break;
      }
    });

    window.ee.on('MOVE_END', () => {
      this.ws.send('MOVE_END'); 
    });
  } 

  handleStartClick() {
    axios.post('/connect', { code: '1AB2' })
      .then(res => {
        if (res.data == true) {
          this.ws = this.setupWebSocket('1AB2');
          this.setState({ mode: 'connecting' });
        } else {
          window.ee.emit('WRONG_CODE'); 
        }
      });
  }

  render() {
    switch(this.state.mode) {
    case 'connect-start':
      return (
        <div className='controls-start-screen'>
          <Invite mode={this.state.mode} />
          <button onClick={this.handleStartClick} className='no-font'>START GAME</button>
          <PlayInfo />
        </div>
      ) 
    case 'connecting':
      return (
        <div className='controls-wait-screen'>
          <p className='wait-title'>Connecting...</p> 
          <PlayInfo />
        </div>
    )

    case 'wait':
      return (
        <div className='controls-wait-screen'>
          <p className='wait-title'>Connected, waiting for game to start</p> 
          <PlayInfo />
        </div>
      )
    case 'play':
      return (
        <div className='controls-screen'>
          <ControlButtons colorIndex={this.state.colorIndex} />
        </div>
      )
    case 'game-over':
      return (
        <GameOver winner={this.state.isWinner} />  
      )
    case 'err':
      return (
        <h1>Error, something went wrong</h1> 
      )
    }
  }
}

render(<Controls />, document.getElementById('root'));

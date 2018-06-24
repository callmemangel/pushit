import React, { Component } from 'react';
import WinnerCounter from './winner-counter.jsx';

export default class WinnerButtons extends Component {
  
  handlePlayAgain() {
    window.ee.emit('PLAY_AGAIN'); 
  }

  handleNewGame() {
    window.ee.emit('NEW_GAME'); 
  }

  render() {
    return (
      <div className='buttons'>
        <WinnerCounter />
        <button className='play-again' onClick={this.handlePlayAgain}>Play again</button>
        <button className='new-game' onClick={this.handleNewGame}>NEW GAME</button>
      </div>
    )
  }
}

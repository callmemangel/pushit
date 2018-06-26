import React, { Component } from 'react';
import WinnerCounter from './winner-counter.jsx';
import { Button, palette } from '../../styled-components';
import styled from 'styled-components'; 

const GradButton = styled.button`
  width: 218px;
  height: 60px;
  font-size: 31px; 
  color: white;
  border-radius: 10px;
  border: 0;
  background: linear-gradient(to right, #feccc1, ${palette.PINK});
  outline: none;
  &:hover {
    cursor: pointer;    
  }
`;

const ImproveButton = Button.extend`
  margin-left: 140px;
`

export default class WinnerButtons extends Component {
  
  handlePlayAgain() {
    window.ee.emit('PLAY_AGAIN'); 
  }

  handleNewGame() {
    window.ee.emit('NEW_GAME'); 
  }

  render() {
    return (
      <div>
        <WinnerCounter />
        <GradButton onClick={this.handlePlayAgain}>Play again</GradButton>
        <ImproveButton red bold fontSize='30px' onClick={this.handleNewGame}>NEW GAME</ImproveButton>
      </div>
    )
  }

}

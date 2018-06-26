import React from 'react';
import styled from 'styled-components';
import { colorProps } from '../../styled-components/props-receivers';
import { palette } from '../../styled-components';

function handleClick(e) {
  switch(e.target.id) {
    case 'play-again':
      window.ee.emit('PLAY_AGAIN');
      break;
    case 'stop-game':
      window.ee.emit('STOP_GAME');
      break;
  }
}

let CenteringWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-family: 'Anton', sans-serif;
  ${colorProps};
  ${props => props.big && 'font-size: 130px'};
  ${props => props.medium && 'font-size: 50px'};
  ${props => props.small && 'font-size: 25px'};
`;

const MiddleTitle = Title.extend`
  text-align: right;
  margin-right: 5px;
  margin-top: -25px; 
`;

const BottomTitle = Title.extend`
  text-align: right;
  margin-right: 10px;
`;

const Buttons = styled.div`
  margin-top: 50px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 10px;
  font-size: 36px;
  color: #fff;
  height: 70px;
  transition: background .3s;
  &:hover {
    background: ${palette.ORANGE};
    cursor: pointer;
  }
`;

const AgainButton = Button.extend`
  width: 270px; 
  background: ${palette.PINK};
`;

const RefusalButton = Button.extend`
  width: 80px;
  background: ${palette.BLUE};
  margin-left: 15px;
`;

var GameOver = ({ winner }) => (
  <CenteringWrapper>
    <div>
      <div>
        <Title red big>{winner ? 'Winner' : 'GAME OVER'}</Title>
        <MiddleTitle blue medium>{winner ? 'not a looser' : 'looser'}</MiddleTitle>
        {winner && <BottomTitle pink small>yet</BottomTitle>} 
      </div>
      <Buttons>
        <AgainButton onClick={handleClick} id='play-again'>
          {winner ? 'Do it again?' : 'Try again?'}
        </AgainButton>
        <RefusalButton onClick={handleClick} id='stop-game'>No</RefusalButton>
      </Buttons>
    </div>
  </CenteringWrapper>
)

export default GameOver;

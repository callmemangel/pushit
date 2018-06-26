import React, { Component } from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

import Player from './player.jsx';
import Timer from './timer.jsx';

let Border = styled.div`
  position: absolute;
  background: ${palette.SANDY};
`;

let VerticalBorder = Border.extend`
  width: 750px;
  height: 2px;
  transform: translateX(-50%);
  left: 50%;
  ${props => props.top && 'top: 0;'}
  ${props => props.bottom && 'bottom: 0;'}
`;

let HorizontalBorder = Border.extend`
  width: 2px;
  height: 553px;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.right && 'right: 0;'}
  ${props => props.left && 'left: 0;'}
`;

let GameField = styled.div`
  width: 870px;
  height: 640px;
  position: relative;
  display: flex;
  vertical-align: top;
`;

let Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

let Field = (props) => {
  let players = props.players.map((player, index) => {
    if (!player) return null;

    return (
      <Player key={index} player={player}/>
    ) 
  });

  return (
    <Wrapper>
      <GameField>
        {players}
        <Timer/>
        <HorizontalBorder left></HorizontalBorder>
        <VerticalBorder top></VerticalBorder>
        <HorizontalBorder right></HorizontalBorder>
        <VerticalBorder bottom></VerticalBorder>
      </GameField>
    </Wrapper>
  )
}

export default Field;

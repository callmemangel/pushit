import React, { Component } from 'react';

import Player from './player.jsx';
import Timer from './timer.jsx';

let Field = (props) => {
  let players = props.players.map((player, index) => {
    if (!player) return null;

    return (
      <Player key={index} player={player}/>
    ) 
  });

  return (
    <div className='game-field'>
      <div className='border-top'></div>
      <div className='border-left'></div>
      <div className='field'>
        {players}
        <Timer />
      </div>
      <div className='border-right'></div>
      <div className='border-bottom'></div>
    </div>
  )
}

export default Field;

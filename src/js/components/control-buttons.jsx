import React, { Component } from 'react';

import { getColor } from '../helpers.js';

function handleTouchStart(e) {
  window.ee.emit('START_MOVE', e.target.id);
}

function handleTouchEnd(e) {
  window.ee.emit('MOVE_END');
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var generateButton = name => (
 <button 
   className={name}
   id={name}
   onTouchStart={handleTouchStart}
   onTouchEnd={handleTouchEnd}
 ></button>
)

var ControlButtons = props => (
  <div className={'control-buttons ' + getColor(props.colorIndex)}>
    <div className='move-buttons'>
      {generateButton('up')}
      {generateButton('left')}
      {generateButton('right')}
      {generateButton('down')}
    </div>
    {generateButton('push')}
  </div>
)

export default ControlButtons;

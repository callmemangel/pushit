import React, { Component } from 'react';

import { getColor } from '../helpers.js';

function handleMouseDown(e) {
  window.ee.emit('START_MOVE', e.target.id);
}

function handleMouseUp(e) {
  window.ee.emit('MOVE_END');
}

function handleTouchStart(e) {
  window.ee.emit('START_MOVE', e.target.id);
}

function handleTouchEnd() {
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
   onMouseDown={handleMouseDown}
   onMouseUp={handleMouseUp}
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
    <button 
      className='push'
      id='push'
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
    ></button>
  </div>
)

export default ControlButtons;

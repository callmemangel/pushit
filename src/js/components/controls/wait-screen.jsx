import React from 'react';

import PlayInfo from './play-info.jsx';

let WaitScreen = props => (
  <div className='controls-wait-screen'>
    <p className='wait-title'>
      {props.mode === 'connecting' ? 'Connecting...' 
                                   : 'Connected, waiting for game to start'}
    </p> 
    <PlayInfo />
  </div>
)

export default WaitScreen;

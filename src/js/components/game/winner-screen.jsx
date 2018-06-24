import React from 'react';

import WinnerTitle from './winner-title.jsx';
import WinnerPlayer from './winner-player.jsx';
import WinnerButtons from './winner-buttons.jsx';

import { getColor } from '../../helpers.js';

let WinnerScreen = props => (
  <div className='winner-screen'> 
    <WinnerTitle /> 
    <WinnerButtons />
    <WinnerPlayer color={getColor(props.color)}/>
  </div>
)

export default WinnerScreen;

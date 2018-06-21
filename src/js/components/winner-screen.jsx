import React, { Component } from 'react';
import WinnerTitle from './winner-title.jsx';
import WinnerPlayer from './winner-player.jsx';
import WinnerButtons from './winner-buttons.jsx';

import { getColor } from '../helpers.js';

export default class WinnerScreen extends Component {

  render() {
    return (
      <div className='winner-screen'> 
        <WinnerTitle /> 
        <WinnerButtons />
        <WinnerPlayer color={getColor(this.props.color)}/>
      </div>
    )
  }
}

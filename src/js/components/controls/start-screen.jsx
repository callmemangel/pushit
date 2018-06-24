import React , { Component } from 'react';

import Invite from './invite.jsx';
import PlayInfo from './play-info.jsx';

export default class StartScreen extends Component {
  constructor() {
    super();
    
    this.state = {
      code: '' 
    }

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(code) {
    this.setState({ code: code }) 
  }

  handleStartClick() {
    let code = this.state.code;

    if (!code) return;

    window.ee.emit('CONNECT_START', code);
  }

  render() {
    return (
      <div className='controls-start-screen'>
        <Invite code={this.state.code} handleChange={this.handleChange} />
        <button onClick={this.handleStartClick} className='no-font'>START GAME</button>
        <PlayInfo />
      </div>
    ) 
  }
}

import React, { Component } from 'react';

export default class StartScreen extends Component {
  
  constructor() {
    super();
    this.state = {
      gameMode: 'single' 
    }

    this.handleGenClick = this.handleGenClick.bind(this);
    this.handleOnlineClick = this.handleOnlineClick.bind(this);
    this.handleModeClick = this.handleModeClick.bind(this);
  }

  handleGenClick() {
    window.ee.emit('GENERATE', this.state.gameMode );
  }

  handleOnlineClick() {
    window.ee.emit('PLAY_ONLINE', this.state.gameMode);
  }
  
  handleModeClick() {
    this.setState({ gameMode: 
                      this.state.gameMode == 'single' ? 'multi' : 'single' });
  }

  render() {
    return (
      <div>
        <Invite /> 
        <div className='buttons'>
          <button onClick={this.handleGenClick}>Generate</button>
          <button onClick={this.handleOnlineClick}>Play online</button>
          <button onClick={this.handleModeClick}>Gamemode: {this.state.gameMode}</button>
        </div>
      </div>
    ) 
  }

}

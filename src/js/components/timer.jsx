import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 5,
      interval: null
    }

    this.startTimer = this.startTimer.bind(this);
  }
  
  doStep() {
    if (!this.state.seconds) {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
      return;
    }
    this.setState({ seconds: --seconds });
  }

  componentDidMount() {
    this.setState({ interval: setInterval(doStep, 1000) });
  }

  render() {
    if (!this.state.seconds) return null;

    return(
      <div className='timer'>{this.state.seconds}</div> 
    )
  }
}

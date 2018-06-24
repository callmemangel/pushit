import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 5,
      interval: null
    }

    this.doStep = this.doStep.bind(this);
  }
  
  doStep() {
    if (!this.state.seconds) {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
      return;
    }
    this.setState({ seconds: --this.state.seconds });
  }

  componentDidMount() {
    this.setState({ interval: setInterval(this.doStep, 1000) });
  }

  render() {
    if (!this.state.seconds) return null;

    return(
      <p className='timer'>{this.state.seconds}</p> 
    )
  }
}

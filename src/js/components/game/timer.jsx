import React, { Component } from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

let StyledTimer = styled.p`
  color: ${palette.PINK};
  font-family: 'Anton', sans-serif;
  font-size: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
      <StyledTimer>{this.state.seconds}</StyledTimer> 
    )
  }
}

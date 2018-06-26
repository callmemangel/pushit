import React, { Component } from 'react';
import styled from 'styled-components';
import { backgroundProps } from '../../styled-components/props-receivers';
import { getColor } from '../../helpers.js';

const PlayerDiv = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  ${backgroundProps};
`;

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.player.x,
      y: this.props.player.y,
      background: 'blue'
    } 
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      x: +nextProps.player.x,
      y: +nextProps.player.y
    });
  }
  
  render() {
    let color = getColor(this.props.player.colorIndex);
    return (
      <PlayerDiv 
        background={color} 
        style={{ left: this.state.x, top: this.state.y }}
        onClick={this.handleClick}
      >
      </PlayerDiv>
    )
  }
}

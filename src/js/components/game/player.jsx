import React, { Component } from 'react';
import { getColor } from '../../helpers.js';

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
    return (
      <div 
        style={{ left: this.state.x, top: this.state.y }}
        onClick={this.handleClick}
        className={'player ' +  getColor(this.props.player.colorIndex)}
      >
      </div>
    )
  }
}

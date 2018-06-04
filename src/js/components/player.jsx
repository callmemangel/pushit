import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    let style = {
      left: this.props.x,
      top: this.props.y
    }

    return (
      <div style={style} className={'player ' + this.props.color}></div>
    )
  }
}

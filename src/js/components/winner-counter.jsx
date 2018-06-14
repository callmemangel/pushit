import React, { Component } from 'react';

export default class WinnerCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0 
    } 
  } 
  
  componentDidMount() {
    window.ee.on('EVENT', () => {
      this.setState({ count: ++count }); 
    });
  }

  render() {
    return (
      <p className='counter'>{this.state.count}</p> 
    ) 
  }
}

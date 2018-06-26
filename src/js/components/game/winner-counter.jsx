import React, { Component } from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

let P = styled.p`
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
  margin-top: -3px;
  font-size: 60px;
  color: ${palette.PINK}
  font-family: 'Anton', sans-serif;
`;

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
      <P>{this.state.count}</P> 
    ) 
  }
}

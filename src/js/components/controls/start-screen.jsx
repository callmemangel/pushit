import React , { Component } from 'react';

import Invite from './invite.jsx';
import PlayInfo from './play-info.jsx';
import styled from 'styled-components';
import { CenterWrapper, Container, Button } from '../../styled-components';

const BlockButton = Button.extend`
  margin-top: 20px;
`;

const FlexStart = Container.extend`
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 100px;
`;

const FlexEnd = Container.extend`
  align-items: flex-end;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

export { FlexEnd, FlexStart };

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
      <CenterWrapper>
        <FlexStart height='100%' column>
          <Invite code={this.state.code} handleChange={this.handleChange} />
          <BlockButton
            onClick={this.handleStartClick}
            red bold fontSize='60px'>
            START GAME
          </BlockButton>
        </FlexStart>
        <FlexEnd height='100%'>
          <PlayInfo />
        </FlexEnd>
      </CenterWrapper>
    ) 
  }
}

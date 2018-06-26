import React, { Component } from 'react';
import { RightLabel, InviteWrapper, InviteInput, Label } from '../../styled-components';

export default class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrongCode: false 
    } 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.state.wrongCode) {
      this.setState({ wrongCode: false });
    }
    this.props.handleChange(e.target.value);
  }

  componentDidMount() {
    window.ee.on('WRONG_CODE', () => {
      this.setState({ wrongCode: true }) 
    });
  }

  render() {
    return (
      <InviteWrapper>
        <Label red htmlFor='code'>{(this.state.wrongCode ? 'bad ' : '') + 'invite code'}</Label>
        <InviteInput 
          onChange={this.handleChange}
          id='code' 
          value={this.props.code}
        />
        <RightLabel red htmlFor='code'>4max</RightLabel>
      </InviteWrapper>
    )
  }
}

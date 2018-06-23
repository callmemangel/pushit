import React, { Component } from 'react';

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
      <div className='invite-wrapper'>
        <label htmlFor='code'>{(this.state.wrongCode ? 'bad ' : '') + 'invite code'}</label>
        <input 
          onChange={this.handleChange}
          id='code' 
          value={this.props.code}
        />
        <label className='right label2' htmlFor='code'>4max</label>
      </div>
    )
  }
}

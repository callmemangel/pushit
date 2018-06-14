import React, { Component } from 'react';

export default class Invite extends Component {
  
  constructor() {
    super();
    this.state = {
      wrongCode: false 
    } 

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (this.state.wrongCode) {
      this.setState({ wrongCode: false });
    } 
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
        {this.props.mode == 'start' ? <div className='invite-square pink'></div> : null}
        <input 
          onChange={this.handleChange}
          id='code' 
          value={this.props.code}
          disabled={!!this.props.code}
        />
        {this.props.mode == 'start' ? <div className='invite-square blue'></div> : null}
        <label className='right label2' htmlFor='code'>4max</label>
      </div>
    )
  }
}

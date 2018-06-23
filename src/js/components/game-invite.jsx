import React, { Component } from 'react';

let GameInvite = props => (
  <div className='invite-wrapper'>
    <label htmlFor='code'>invite code</label>
    {props.mode == 'start' && <div className='invite-square pink'></div>}
    <input 
      id='code' 
      value={props.code}
      disabled={true}
    />
    {props.mode == 'start' && <div className='invite-square blue'></div>}
    <label className='right label2' htmlFor='code'>4max</label>
  </div>
)

export default GameInvite;

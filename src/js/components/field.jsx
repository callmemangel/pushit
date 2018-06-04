import React, { Component } from 'react';
import Player from './components/player.jsx';
import Timer from './components/timer.jsx';

export default class Field extends Component() {
  constructor(props) {
    super(props); 
    this.state = {
      players: this.props.players;
    }
  }

  render() {
    let players = this.state.players.map((player, index) => {
      return (
        <Player player={player} index={index}/>
      ) 
    });

    return (
     <div className='field'>
       {Players}
       <Timer />
     </div>
    )
  }
}

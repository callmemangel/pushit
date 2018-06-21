import React, { Component } from 'react';
import Player from './player.jsx';
import Timer from './timer.jsx';

export default class Field extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      players: this.props.players
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      players: nextProps.players 
    }) 
  }

  render() {
    let players = this.state.players.map((player, index) => {
      if (!player) return null;

      return (
        <Player key={index} player={player}/>
      ) 
    });

    return (
     <div className='game-field'>
       <div className='border-top'></div>
       <div className='border-left'></div>
       <div className='field'>
         {players}
         <Timer />
       </div>
       <div className='border-right'></div>
       <div className='border-bottom'></div>
     </div>
    )
  }
}

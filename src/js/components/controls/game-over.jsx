import React from 'react';

function handleClick(e) {
  switch(e.target.id) {
    case 'play-again':
      window.ee.emit('PLAY_AGAIN');
      break;
    case 'stop-game':
      window.ee.emit('STOP_GAME');
      break;
  }
}

let style1 = {
  marginLeft: 0 
}

let style2 = {
  fontSize: 150
}

let style3 = {
  marginRight: 75
}

var GameOver = props => (
  <div className='game-over'>
    <div className='title'>
    {props.winner ? <p style={style2} >WINNER</p> : <p>GAME OVER</p>}
    {props.winner ? <p style={style3}>not a looser</p> : <p>looser</p>}
    {props.winner ? <p>yet</p> : null}
    </div>
    <div className='buttons'>
      <button style={props.winner ? style1 : null} onClick={handleClick} id='play-again'>
        {props.winner ? 'Do it again?' : 'Try again?'}
      </button>
      <button onClick={handleClick} id='stop-game'>No</button>
    </div>
  </div>
)

export default GameOver;

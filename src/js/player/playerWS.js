import Player from './playerObj.js';

function setup(ws) {

  var player = new Player(ws);

  ws.on('message', signal => {
    switch(signal) {

    case 'MOVE_UP':
      player.startMove('up');
      break;
    case 'MOVE_RIGHT':
      player.startMove('right');
      break;
    case 'MOVE_DOWN':
      player.startMove('down');
      break;
    case 'MOVE_LEFT':
      player.startMove('left');
      break;

    case 'MOVE_END': 
      player.stopMove();
      break;
    }

    case 'PUSH':
      player.push();

  });

  ws.on('error', event => {
    console.log(event.code);
  });

  ws.on('close', event => {
    deletePlayer(player); 
  });
    
  return player;
}

export default setup;

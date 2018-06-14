let Player = require('./Player.js');

var setup = function(ws, game, customColor = null) {

  var player = new Player(ws, game, customColor);

  ws.on('message', signal => {
    console.log(signal); 
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

    case 'PUSH':
      player.push(1);
      break;

    case 'DISCONNECT':
      player.delFromGame();
      break;
    }
  });

  ws.on('error', event => {
    console.log(event.code);
  });

  ws.on('close', event => {
    player.delFromGame(); 
  });
    
  return player;
}

module.exports = setup;

function Display(ws, game) {
  this.ws = ws;
  this.game = game;

  ws.on('close', () => {
    ws.isClosed = true; 
    console.log('DISPLAY CLOSED');
  });

  this.delFromGame = function() {
    game.delDisplay(this); 
  } 
  
  this.addToGame = function() {
    this.game.addDisplay(this); 
  }

  this.renderWinner = function(colorIndex) {
    if (ws.isClosed) return;

    this.ws.send(JSON.stringify({ type: 'GOT_WINNER', colorIndex: colorIndex }));
  }

  this.close = function() {
    if (ws.isClosed) return;

    this.ws.send(JSON.stringify({ type: 'GAME_DELETE' }));
  }

  this.delPlayer = function(id) {
    if (ws.isClosed) return;

    this.ws.send(JSON.stringify({ type: 'DELETE_PLAYER', id: id }));
  }

  this.killPlayer = function(id) {
    if (ws.isClosed) return;
    this.ws.send(JSON.stringify({ type: 'KILL_PLAYER', id: id }));
  }

  this.sendCoords = function(coords) {
    if (ws.isClosed) return;
    this.ws.send(JSON.stringify({ type: 'C', coords: coords.join('.')}));
  }

  this.sendPlayer = function(player) {
    let obj = {
      x: player.x,
      y: player.y,
      colorIndex: player.colorIndex,
      id: player.id
    } 
    console.log(obj);
    this.ws.send(JSON.stringify({ type: 'ADD_PLAYER', player: obj}));
  }
}

module.exports = Display;

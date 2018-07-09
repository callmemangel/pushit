function Display(ws, game) {
  this.ws = ws;
  this.game = game;

  ws.on('close', () => {
    console.log('DISPLAY CLOSED');
  });

  ws.sendSafe = function(string) {
    if (this.readyState == 2 || this.readyState == 3) return; 

    this.send(string);
  }

  this.delFromGame = function() {
    game.delDisplay(this); 
  } 
  
  this.addToGame = function() {
    this.game.addDisplay(this); 
  }

  this.renderWinner = function(colorIndex) {
    this.ws.sendSafe(JSON.stringify({ type: 'GOT_WINNER', colorIndex: colorIndex }));
  }

  this.sendAgainSignal = function() {
    this.ws.sendSafe(JSON.stringify({ type: 'WANT_AGAIN' }));
  }

  this.close = function() {
    this.ws.sendSafe(JSON.stringify({ type: 'GAME_DELETE' }));
  }

  this.delPlayer = function(id) {
    this.ws.sendSafe(JSON.stringify({ type: 'DELETE_PLAYER', id: id }));
  }

  this.killPlayer = function(id) {
    this.ws.sendSafe(JSON.stringify({ type: 'KILL_PLAYER', id: id }));
  }

  this.sendCoords = function(coords) {
    this.ws.sendSafe(JSON.stringify({ type: 'C', coords: coords.join('.')}));
  }

  this.sendPlayer = function(player) {
    let obj = {
      x: player.x,
      y: player.y,
      colorIndex: player.colorIndex,
      id: player.id
    } 
    console.log(obj);
    this.ws.sendSafe(JSON.stringify({ type: 'ADD_PLAYER', player: obj}));
  }
}

module.exports = Display;

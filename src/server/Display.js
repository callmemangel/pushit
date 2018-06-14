function Display(ws, game) {
  this.ws = ws;
  this.game = game;

  this.delFromGame = function() {
    game.delDisplay(this); 
  } 
  
  this.addToGame = function() {
    this.game.addDisplay(this); 
  }

  this.sendCoords = function(coords) {
    this.ws.send(JSON.stringify({ type: 'COORDS', coords: coords.join('.')}));
  }

  this.sendPlayer = function(player) {
    let obj = {
      x: player.x,
      y: player.y,
      colorIndex: player.colorIndex
    } 
    console.log(obj);
    this.ws.send(JSON.stringify({ type: 'ADD_PLAYER', player: obj}));
  }
}

module.exports = Display;

function Game(code, mode, type) {
  this.mode = mode;  
  this.code = code;
  this.type = type;
  this.master = null;
  this.id = null;
  this.state = 'wait';
  this.freePlayerSpaces = 4;
  this.freeDisplaySpaces = 4;
  this.players = [];
  this.displays = [];

  this.sendCoords = function() {
    let coords = this.getAllCoords();
    console.log(coords);
    for(let i = 0; i < this.displays.length; i++) {
      this.displays[i].sendCoords(coords);
    } 
  }
  
/*  this.setMaster = function(master) {
    master.game = this; 
    this.master = master;
  }*/

  this.delPlayer = function(player) {
    let id = player.id;
    if (!id) return;

    delete this.players[id]; 
    this.freePlayerSpaces++;
  }

  this.delDisplay = function(display) {
    let id = player.id;

    if(!id) return;

    delete this.displays[id]; 
    this.freeDisplaySpaces++;  
  }

  this.addPlayer = function(player) {
    for (let i = 0; i < 4; i++) {
      if (!this.players[i]) {
        this.players[i] = player;
        player.id = i;
        this.freePlayerSpaces--;
        return i;
      }
    }
    return null;
  }

  this.addDisplay = function(display) {
     for (let i = 0; i < 4; i++) {
      if (!this.displays[i]) {
        this.displays[i] = display;
        display.id = i;
        this.freeDisplaySpaces--;
        return i;
      }
    }
    return null; 
  }

  this.sendPlayer = function(player) {
    for (let i = 0; i < this.displays.length; i++) {
      this.displays[i].sendPlayer(player); 
    } 
  }

  this.getAllCoords = function() {
    let coords = [];
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) {
        coords.push(undefined); 
        coords.push(undefined); 
        continue;
      }
      coords.push(this.players[i].x);
      coords.push(this.players[i].y);
    } 
    return coords;
  }

  this.startGame = function() {
    console.log('Game starting...');
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].startGame(); 
    }
  }

  this.playAgain = function() {}
  this.del = function() {
     
  }
}

module.exports = Game;

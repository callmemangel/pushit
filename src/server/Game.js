function Game(code, mode, type, games) {
  this.mode = mode;  
  this.code = code;
  this.type = type;
  this.master = null;
  this.id = null;
  this.state = 'wait';
  this.freePlayerSpaces = 4;
  this.freeDisplaySpaces = 4;
  this.fieldW = 870;
  this.fieldH = 640;
  this.players = [];
  this.displays = [];
  this.games = games;


  this.sendCoords = function() {
    let coords = this.getAllCoords();
    console.log(coords);
    for(let i = 0; i < this.displays.length; i++) {
      this.displays[i].sendCoords(coords);
    } 
  }
  
  this.delPlayer = function(player) {
    let id = player.id;
    console.log('id', id);
    if (id === null) return;

    delete this.players[id]; 
    this.freePlayerSpaces++;

    for (let i = 0; i < this.displays.length; i++) {
      this.displays[i].delPlayer(id); 
    }

    this.checkGameOver();
  }

  this.setPlayerKilled = function(player) {
    let id = player.id;
    console.log('id', id);

    if (id === null) return;

    for (let i = 0; i < this.displays.length; i++) {
      this.displays[i].killPlayer(id); 
    }

    this.checkGameOver();
  }

  this.getKilledPlayers = function() {
    let counter = 0; 

    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) continue;
      if (this.players[i].isKilled) {
        counter++; 
      }
    }

    return counter;
  }

  this.clearIdlePlayers = function() {
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) continue;

      if (!this.players[i].wantAgain) {
        this.players[i].delFromGame(); 
      }
    } 
  }
  
  this.getLastPlayer = function() {
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) continue;
      if (!this.players[i].isKilled) return this.players[i];
    } 
    return null;
  }

  this.getPlayersNum = function() {
    let counter = 0;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i]) counter++; 
    } 
    return counter;
  }

  this.checkGameOver = function() {
    if (this.getKilledPlayers() === this.players.length - 1) { //this.players.length - 1
      let player = this.getLastPlayer();
      if (!player) return;
      this.renderWinner(player); 
      player.setWinner();
      this.stopGame();
      console.log('GAME OVER');
    } 
  }

  this.stopGame = function() {
    for (let i = 0; i < this.players.length; i++) {
      clearInterval(this.players[i].interval); 
    } 
  }

  this.renderWinner = function(player) {
    for (let i = 0; i < this.displays.length; i++) {
      this.displays[i].renderWinner(player.colorIndex);
    } 
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
    console.log('Game starting...', this.players.length);
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) continue;

      this.players[i].setInitialCoords();
      this.players[i].isKilled = false;
      this.players[i].startGame(); 
    }
    this.sendCoords();
  }

  this.playAgain = function() {
    console.log('PLAY_AGAIN');
    console.log('clearing idle');
    this.clearIdlePlayers();

    if (this.getPlayersNum() < 2) {
      this.del(); 
      return;
    }

    this.startGame();
  }

  this.del = function() {

    console.log('trying to deleting game...');
    for (let i = 0; i < this.players.length; i++) {
      if (!this.players[i]) continue;
      this.players[i].delGame(); 
    }    
    for (let i = 0; i < this.displays.length; i++) {
      if (!this.displays[i]) continue;
      this.displays[i].close();
    }

    delete this.games[this.id];
  }
}

module.exports = Game;

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

  this.delPlayer = function(player) {
    let id = player.id;

    if (id === null) return;

    delete this.players[id]; 
    this.freePlayerSpaces++;

    this.displays.forEach(display => {
      display.delPlayer(id); 
    });

    this.checkGameOver();
  }

  this.sendPlayer = function(player) {
    this.displays.forEach(display => {
      display.sendPlayer(player); 
    });
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

  this.delDisplay = function(display) {
    let id = player.id;

    if(!id) return;

    delete this.displays[id]; 
    this.freeDisplaySpaces++;  
  }

  this.startGame = function() {
    console.log('Game starting...', this.players.length);
    this.players.forEach(player => {
      if (!player) return;

      player.setInitialCoords();
      player.isKilled = false;
      player.startGame(); 
    });
    this.sendCoords();
  }

  this.getAllCoords = function() {
    let coords = [];
    this.players.forEach(player => {
      if (!player) {
        coords.push(undefined); 
        coords.push(undefined); 
        return;
      }
      coords.push(player.x);
      coords.push(player.y);
    });
    return coords;
  }

  this.sendCoords = function() {
    let coords = this.getAllCoords();
    console.log(coords);
    this.displays.forEach(display => {
      display.sendCoords(coords);
    });
  }
  
  this.setPlayerKilled = function(player) {
    let id = player.id;

    if (id === null) return;

    this.displays.forEach(display => {
      display.killPlayer(id); 
    });

    this.checkGameOver();
  }

  this.getKilledPlayers = function() {
    let counter = 0; 

    this.players.forEach(player => {
      if (!player) return;

      if (player.isKilled) {
        counter++; 
      }
    });
    return counter;
  }

  this.getPlayersNum = function() {
    let counter = 0;
    this.players.forEach(player => {
      if (player) counter++; 
    });
    return counter;
  }

  this.checkGameOver = function() {
    if (this.getKilledPlayers() === this.getPlayersNum() - 1) { //this.players.length - 1
      let player = this.getLastPlayer();
      if (!player) return;
      this.renderWinner(player); 
      player.setWinner();
      this.stopGame();
    } 
  }

  this.getLastPlayer = function() {
    let lastPlayer = null;
    this.players.forEach(player => {
      if (!player) return;

      if (!player.isKilled) lastPlayer = player;
    });

    return lastPlayer;
  }

  this.renderWinner = function(player) {
    this.displays.forEach(display => {
      display.renderWinner(player.colorIndex);
    });
  }

  this.clearIdlePlayers = function() {
    this.players.forEach(player => {
      if (!player) return;

      if (!player.wantAgain) {
        player.delFromGame(); 
      }
    });
  }

  this.stopGame = function() {
    this.players.forEach(player => {
      clearInterval(player.interval); 
    });
  }

  this.playAgain = function() {
    this.clearIdlePlayers();

    if (this.getPlayersNum() < 2) {
      this.del(); 
      return;
    }

    this.startGame();
  }

  this.del = function() {
    this.players.forEach(player => {
      if (!player) return;
      player.delGame(); 
    });
    this.displays.forEach(display => {
      if (!display) return;
      display.close();
    });

    delete this.games[this.id];
  }
}

module.exports = Game;

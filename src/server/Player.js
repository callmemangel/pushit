function Player(ws, game, customColor) {

  this.game = game;
  this.isKilled = false;
  this.id = null;
  this.interval = null;
  this.ws = ws;
  this.currVector = null;
  this.wantAgain = null;
  this.MOVE_SPEED = 30;
  this.MOVE_WIDTH = 10;

  this.size = 80 - 1;

  this.setDeath = function() {
    this.ws.send(JSON.stringify({ type: 'GAME_OVER'}));

    clearInterval(this.interval);
    
    this.isKilled = true;
    this.wantAgain = false;

    this.game.setPlayerKilled(this);
  }

  this.sendColor = function() {
    this.ws.send(JSON.stringify({ type: 'SET_COLOR', colorIndex: this.colorIndex }));
  }

  this.setWinner = function() {
    this.wantAgain = false;
    this.ws.send(JSON.stringify({ type: 'WINNER' }));
  }

  this.startGame = function() {
    this.ws.send(JSON.stringify({ type: 'START_GAME'})); 
  }

  this.delFromGame = function() {
    this.game.delPlayer(this);

    if (this.ws.isClosed) return;

    this.ws.send(JSON.stringify({ type: 'START_SCREEN' }));
  }

  this.delGame = function() {
    if (this.ws.isClosed) return;

    this.ws.send(JSON.stringify({ type: 'START_SCREEN' }));
  }

  this.addToGame = function() {
    this.game.addPlayer(this);   
  }

  this.push = function(num, vector = null) {
    let vect = this.vector;

    if (vector) vect = vector;

    if (!vect) return;

    switch(vect) {
    case 'up': 
      this.y -= num;
      break;
    case 'right': 
      this.x += num;
      break;
    case 'down': 
      this.y += num; 
      break;
    case 'left': 
      this.x -= num; 
      break;
    }

    let players = this.checkCollision();
    this.setCollision(vect, players);
    this.game.sendCoords();

    if(this.checkDeath()) {
      this.setDeath();
      return;
    };
  }

  this.isIntersect = function(x, y) {
    if (x >= this.x && x <= this.x + this.size &&
        y >= this.y && y <= this.y + this.size) {
      return true; 
    } 
    return false; 
  }

  this.checkDeath = function() {
    return (
      this.x + this.size < 0    ||
      this.y + this.size < 0    ||
      this.x > this.game.fieldW ||
      this.y > this.game.fieldH
    )
  }
  
  this.setCollision = function(vect, players) {
    for (let i = 0; i < players.length; i++) {
      let pushObj = {};

      switch(vect) {
      case 'up':
        pushObj.collisionW = players[i].y + players[i].size - this.y + 1;
        pushObj.vector = 'up';
        break;

      case 'right':
        pushObj.collisionW = this.x + this.size - players[i].x + 1;
        pushObj.vector = 'right';
        break;

      case 'down':
        pushObj.collisionW = this.y + this.size - players[i].y + 1;
        pushObj.vector = 'down';
        break;

      case 'left':
        pushObj.collisionW = players[i].x + players[i].size - this.x + 1;
        pushObj.vector = 'left';
      }
        
      players[i].push(pushObj.collisionW, pushObj.vector); 
    }
  }

  this.checkCollision = function () {
    let collisionPlayers = [];
    for (let i = 0; i < this.game.players.length; i++) {
      if (!this.game.players[i] || this.game.players[i].id === this.id) continue;

      let collision = this.game.players[i].isIntersect(this.x, this.y) ||
                      this.game.players[i].isIntersect(this.x + this.size, this.y) ||
                      this.game.players[i].isIntersect(this.x + this.size, this.y + this.size) ||
                      this.game.players[i].isIntersect(this.x, this.y + this.size); 

      if (collision) collisionPlayers.push(this.game.players[i]);
    }
    return collisionPlayers;
  }

  this.startMove = function(vector) {
    console.log(`starting moving by ${vector}`);
    this.vector = vector;
    this.push(this.MOVE_WIDTH);

    if (this.interval) {
      clearInterval(this.interval); 
    }

    this.interval = setInterval(() => {
      this.push(this.MOVE_WIDTH); 
    }, this.MOVE_SPEED);
  };
  
  this.stopMove = function() {
    clearInterval(this.interval);
    this.interval = null;
    this.vector = null;
  }

  this.setInitialCoords = function(num = null) {
    let id = num || this.id;

    this.x = id % 2 ? 745 : 40;
    this.y = id < 2 ? 40 : 525;
  }

  this.setInitialColor = function() {
    this.colorIndex = customColor ? customColor : this.id;
  }
  
}

module.exports = Player;

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
    this.ws.sendSafe(JSON.stringify({ type: 'GAME_OVER'}));

    clearInterval(this.interval);
    
    this.isKilled = true;
    this.wantAgain = false;

    this.game.setPlayerKilled(this);
  }

  this.sendColor = function() {
    this.ws.sendSafe(JSON.stringify({ type: 'SET_COLOR', colorIndex: this.colorIndex }));
  }

  this.setWinner = function() {
    this.wantAgain = false;
    this.ws.sendSafe(JSON.stringify({ type: 'WINNER' }));
  }

  this.startGame = function() {
    this.ws.sendSafe(JSON.stringify({ type: 'START_GAME'})); 
  }

  this.delFromGame = function() {
    this.game.delPlayer(this);

    this.ws.sendSafe(JSON.stringify({ type: 'START_SCREEN' }));
  }

  this.delGame = function() {
    this.ws.sendSafe(JSON.stringify({ type: 'START_SCREEN' }));
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
    };
  }

  this.isIntersect = function(x, y) {
    return (x >= this.x && x <= this.x + this.size &&
        y >= this.y && y <= this.y + this.size);
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
    players.forEach(player => {
      let pushObj = {};

      switch(vect) {
      case 'up':
        pushObj.collisionW = player.y + player.size - this.y + 1;
        pushObj.vector = 'up';
        break;

      case 'right':
        pushObj.collisionW = this.x + this.size - player.x + 1;
        pushObj.vector = 'right';
        break;

      case 'down':
        pushObj.collisionW = this.y + this.size - player.y + 1;
        pushObj.vector = 'down';
        break;

      case 'left':
        pushObj.collisionW = player.x + player.size - this.x + 1;
        pushObj.vector = 'left';
      }
        
      player.push(pushObj.collisionW, pushObj.vector); 
    });
  }

  this.checkCollision = function () {
    let collisionPlayers = [];

    this.game.players.forEach(player => {
      if (!player || player.id === this.id) return;

      let collision = player.isIntersect(this.x, this.y) ||
                      player.isIntersect(this.x + this.size, this.y) ||
                      player.isIntersect(this.x + this.size, this.y + this.size) ||
                      player.isIntersect(this.x, this.y + this.size); 

      if (collision) collisionPlayers.push(player);
    });
    return collisionPlayers;
  }

  this.startMove = function(vector) {
    this.vector = vector;
    this.push(this.MOVE_WIDTH);

    clearInterval(this.interval); 

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

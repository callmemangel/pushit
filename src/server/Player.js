
function Player(ws, game, customColor) {

  this.game = game;
  //this.players = game.players;
  this.id = null;
  this.interval = null;
  this.ws = ws;
  this.currVector;
  this.MOVE_SPEED = 100;
  this.MOVE_WIDTH = 10;

  this.size = 80 - 1;

  /*this.collisions = {
    TOP: null,
    RIGHT: null,
    BOTTOM: null,
    LEFT: null
  };*/
  
  this.setKilled = function() {
    this.ws.send('GAME_OVER');
  }

  this.startGame = function() {
    this.ws.send(JSON.stringify({ type: 'START_GAME'})); 
    console.log('send signal to client');
  }

  this.delFromGame = function() {
    this.game.delPlayer(this);
  }

  this.addToGame = function() {
    this.game.addPlayer(this);   
  }

  this.closeConnection = function() {
    this.ws.close(); 
    this.ws = null;
  };
  
  this.push = function(num, vector = null) {
    let vect = this.vector || vector;

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

    if(this.checkDeath()) {
      this.setDeath();
      return;
    };

    let players = this.checkCollision();
    this.setCollision(vect, players);
    this.game.sendCoords();
    console.log('sended coords');
  }
  this.setDeath = function() {
    console.log('death set'); 
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
      if (this.game.players[i].id === this.id) continue;

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
  
  //this.game.addPlayer(this);


    //this.game.sendPlayer(this);
}

module.exports = Player;

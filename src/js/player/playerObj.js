const MOVE_SPEED = 100;
const MOVE_WIDTH = 10;

function Player() {
  this.id = null;
  this.interval = null;
  this.ws = null;
  this.currVector;

  this.collisions = {
    TOP: null,
    RIGHT: null,
    BOTTOM: null,
    LEFT: null
  };
  
  this.x = id % 2 ? 'right col coord' : 'left col coord';
  this.y = id < 2 ? 'top row coord' : 'bottom col coord';


  this.setKilled = function() {
    this.ws.send('DEAD');
  };

  this.closeConnection = function() {
    this.ws.close(); 
    this.ws = null;
  };

  this.startMove = function(vector) => {
    this.vector = vector; 
    
    switch (vector) {
    case 'up': 
      this.interval = setInterval(() => {
        this.y -= MOVE_WIDTH; 
      }, MOVE_SPEED);
      break;

    case 'right': 
      this.interval = setInterval(() => {
        this.x += MOVE_WIDTH; 
      }, MOVE_SPEED);
      break;
    case 'down': 
      this.interval = setInterval(() => {
        this.y += MOVE_WIDTH; 
      }, MOVE_SPEED);
      break;
    case 'left': 
      this.interval = setInterval(() => {
        this.x -= MOVE_WIDTH; 
      }, MOVE_SPEED);
      break;
    }
  };
  
  this.stopMove = function() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

export default Player;

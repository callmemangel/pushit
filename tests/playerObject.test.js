import assert from 'assert';


import Player from '../src/js/player/playerObj.js';

describe('player object test', function() {

  it('on creation should pass himself to array', function() {
    let game = {
      players: [] 
    }
    let player = new Player(game);
    assert.equal(game.players.length, 1);
  });


  it('first player should have x = 40, y = 40', function() {
    let game = {
      players: [] 
    }
    let player = new Player(game);
    assert(player.x === 40 && player.y === 40);
  });

  it('second player should have x = 745, y = 40', function() {
    let game = {
      players: [] 
    }
    let player1 = new Player(game);
    let player = new Player(game);
    assert(player.x === 745 && player.y === 40);
  });

  it('third player should have x = 40, y = 525', function() {
    let game = {
      players: [] 
    }
    let player3 = new Player(game, 2);
    let player2 = new Player(game, 2);
    let player = new Player(game, 2);
    assert(player.x === 40 && player.y === 525);
  }); 

  it('forth player should have x = 745, y = 525', function() {
     let game = {
      players: [] 
    }     
    let player3 = new Player(game, 3);
    let player2 = new Player(game, 3);
    let player1 = new Player(game, 3);
    let player = new Player(game, 3);
    assert(player.x === 745 && player.y === 525);
  });

  it('should set death when left side under the field', function() {
    let game = {
      players: [] 
    }
    let player = new Player(game, 0); 
    player.x = -81;
    player.y = 20;
    player.size = 80;
    assert(player.checkDeath());
  });

  it('should not set death when left side on the field', function() {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640 
    }
    let player = new Player(game, 0); 
    player.x = -79;
    player.y = 20;

    assert(!player.checkDeath());
  });
  
  it('should set death when right side out of the field', function() {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640 
    }
    let player = new Player(game, 0); 
    player.x = 871;
    player.y = 20;
    player.size = 80;

    assert(player.checkDeath());
  });

  it('should return intersect = true when cell is inside', function() {
    let game = {
      players: [] 
    }
    let player = new Player(game, 0); 

    assert.equal(player.isIntersect(40, 40), true);
  });
 
  function makeIntersectTest(corner) {
    let cell = {};
    switch(corner) {
    case 0: 
      cell.x = 39;
      cell.y = 39;
      break;
    case 1: 
      cell.x = 120;
      cell.y = 39;
      break;
    case 2: 
      cell.x = 120;
      cell.y = 120;
      break;
    case 3: 
      cell.x = 39;
      cell.y = 120;
      break;
    }
    it(`should return intersect = false when cell with x = ${cell.x}, y = ${cell.y} is outside`, function() {
      let game = {
        players: [] 
      }
      let player0 = new Player(game, 0);
    
      assert.equal(player0.isIntersect(cell.x, cell.y), false);
    });
  }
  
  for(let i = 0; i < 4; i++) {
    makeIntersectTest(i); 
  }
  function makeCollisionTest(corner){
    let game = {
      players: [] 
    }
    let player0 = new Player(game, 0);
    let player1 = new Player(game, 1);
    it("should get collision on " + corner + " corner", function() {
       switch(corner) {
       case 0: 
         player1.x = 40 - 70;
         player1.y = 40 - 70;
         break;
       case 1:
         player1.x = 40 + 70;
         player1.y = 40 - 70;
       case 2:
         player1.x = 40 + 70;
         player1.y = 40 + 70;
       case 3:
         player1.x = 40 - 70;
         player1.y = 40 + 70;
       } 
       assert.equal(player0.checkCollision().length, 1);
    });
  } 
 

  for (var i = 0; i < 4; i++) {
    makeCollisionTest(i); 
  }
  it('should change coord on push move', function() {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640,
      sendCoords: function() {}
    }
    let player = new Player(game, 0);

    player.vector = 'right';

    player.push(10);

    assert.equal(player.x, 50);
  });
  function makePushCollisionTest1P(vector) {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640,
      sendCoords: function() {}
    }
    let player0 = new Player(game);
    let player1 = new Player(game);

    player1.x = player0.x;
    player1.y = player0.y;

    player0.vector = vector;

    let expected;
    let moveWidth = 10;

    switch(vector) {
      case 'up':
        player1.y = player0.y - 80;
        expected = player1.y - moveWidth;
        break;
      case 'right':
        player1.x = player0.x + 80;
        expected = player1.x + moveWidth;
        break;
      case 'down':
        player1.y = player0.y + 80;
        expected = player1.y + moveWidth;
        break;
      case 'left':
        player1.x = player0.y - 80;
        expected = player1.x - moveWidth;
        break;
    }

    it(`should change coord of second player on ${vector} collision`, function() {

      player0.push(moveWidth);

      assert.equal(vector == 'down' || vector == 'up' ? player1.y : player1.x, expected);
    });
  }

  makePushCollisionTest1P('up');
  makePushCollisionTest1P('right');
  makePushCollisionTest1P('left');
  makePushCollisionTest1P('down');


  function makePushCollisionTest2P(vector) {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640,
      sendCoords: function() {},
    }

    let player0 = new Player(game);
    let player1 = new Player(game);
    let player2 = new Player(game);

    player1.x = player0.x;
    player1.y = player0.y;

    player2.x = player0.x;
    player2.y = player0.y;

    player0.vector = vector;

    let expected;
    let moveWidth = 10;

    switch(vector) {
      case 'up':
        player0.y = 500;
        player1.y = player0.y - 80;
        player2.y = player1.y - 80;
        expected = player2.y - moveWidth;
        break;
      case 'right':
        player1.x = player0.x + 80;
        player2.x = player1.x + 80;
        expected = player2.x + moveWidth;
        break;
      case 'down':
        player1.y = player0.y + 80;
        player2.y = player1.y + 80;
        expected = player2.y + moveWidth;
        break;
      case 'left':
        player0.x = 700;
        player1.x = player0.x - 80;
        player2.x = player1.x - 80;
        expected = player2.x - moveWidth;
        break;
    }

    it(`should change coord of third player on ${vector} collision`, function() {

      player0.push(moveWidth);

      assert.equal(vector == 'down' || vector == 'up' ? player2.y : player2.x, expected);
    });
  }


  makePushCollisionTest2P('up');
  makePushCollisionTest2P('right');
  makePushCollisionTest2P('down');
  makePushCollisionTest2P('left');

  it('should stop move on stopMove', function() {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640,
      sendCoords: function() {}
    }

    let player = new Player(game, 0); 

    player.startMove('left');
    player.stopMove();
    
    assert.equal(player.x, 30) 
  });

  it ('should set death on start move for 10px', function() {
    let game = {
      players: [],
      fieldW: 870,
      fieldH: 640,
      sendCoords: function() {
      
      }
    }

    let player = new Player(game, 0); 
    player.x = -71;

    player.startMove('left');
    player.stopMove('left');
    assert.equal(player.checkDeath(), true) ;
  });

});

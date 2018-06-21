import Game from '../src/server/Game.js';
import Player from '../src/server/Player.js';
import Display from '../src/server/Display.js';
import assert from 'assert';
import { Server } from 'mock-socket';

describe('add player function test', () => {
  let game = new Game();
  let player1 = new Player();
  let player2 = new Player();
  let player3 = new Player();
  let player4 = new Player();

  it ('should set id of player on add', () => {
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.addPlayer(player3);
    game.addPlayer(player4);

    assert.equal(player1.id, 0, 'after add set id of 0');
    assert.equal(player2.id, 1, 'after add set id of 1');
    assert.equal(player3.id, 2, 'after add set id of 2');
    assert.equal(player4.id, 3, 'after add set id of 3');
  });

  it ('should add player on free space', () => {
    delete game.players[2];

    game.addPlayer(player3);
    assert.equal(game.players[2], player3, 'add player3 on free space');
  });
});

describe('add display function test', () => {
  let ws = {
    on: function() {} 
  };
  let game = new Game();
  let display1 = new Display(ws);
  let display2 = new Display(ws);
  let display3 = new Display(ws);
  let display4 = new Player(ws);

  it ('should set id of display on add', () => {
    game.addDisplay(display1);
    game.addDisplay(display2);
    game.addDisplay(display3);
    game.addDisplay(display4);

    assert.equal(display1.id, 0, 'after add set id of 0');
    assert.equal(display2.id, 1, 'after add set id of 1');
    assert.equal(display3.id, 2, 'after add set id of 2');
    assert.equal(display4.id, 3, 'after add set id of 3');
  });

  it ('should add display on free space', () => {
    delete game.displays[2];

    game.addDisplay(display3);
    assert.equal(game.displays[2], display3, 'add display3 on free space');
  });
});

describe('delete player function test', () => {
  it ('should delete player in array', () => {
    let game = new Game();
    let player = new Player();
    game.addPlayer(player);

    game.delPlayer(player);
    assert.equal(game.players[0], undefined);
  });

  it ('should send message to display on delete', (done) => {
    const server = new Server('ws://localhost:8080');
    let game = new Game();
    let player = new Player();
    let display1 = new Display(server, game);

    game.addPlayer(player);
    game.addDisplay(display1);

    let messagesNum = 0;

    const client = new WebSocket('ws://localhost:8080');

    client.onmessage = (event) => {
      let data = JSON.parse(event.data);
      if (data.type == 'DELETE_PLAYER') {
        messagesNum++; 
      }
    };

    game.delPlayer(player);

    setTimeout(() => {
      assert.equal(messagesNum, 1, '1 display send signal');
      server.stop(done);
    }, 100)
  });
});

/* describe('game object test', function() {
  it ('should get coords of all players', function() {
    let game = new Game('a123', 'single'); 

    let player0 = new Player(game, 0);
    let player1 = new Player(game, 1);
    let player2 = new Player(game, 2);
    let player3 = new Player(game, 3);

    let trueCoords=[player0.x, player0.y,
                    player1.x, player1.y,
                    player2.x, player2.y,
                    player3.x, player3.y];

    let coords = game.getAllCoords();  
    
    let isTrue = true;

    for (let i = 0; i < trueCoords.length; i++) {
      if (trueCoords.length !== coords.length) {
        isTrue=false;
        continue;
      }

      if (trueCoords[i] !== coords[i]) {
        isTrue = false; 
      }
    }

    assert.equal(isTrue, true);
  });
  it ('should get coords of all players (undefined test)', function() {
    let game = new Game('a123', 'single'); 

    let player0 = new Player(game, 0);
    let player1 = new Player(game, 1);
    let player2 = new Player(game, 2);
    let player3 = new Player(game, 3);

    delete game.players[2];

    let trueCoords=[player0.x, player0.y,
                    player1.x, player1.y,
                    undefined, undefined,
                    player3.x, player3.y];

    let coords = game.getAllCoords();  
    
    let isTrue = true;

    for (let i = 0; i < trueCoords.length; i++) {
      if (trueCoords.length !== coords.length) {
        isTrue=false;
        continue;
      }

      if (trueCoords[i] !== coords[i]) {
        isTrue = false; 
      }
    }

    assert.equal(isTrue, true);
  });
});*/

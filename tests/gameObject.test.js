import Game from '../src/js/game/gameObj.js';
import Player from '../src/js/player/playerObj.js';
import assert from 'assert';

describe('game object tets', function() {
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
});

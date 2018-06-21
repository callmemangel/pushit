function GameMaster(game) {
  this.game = game;

  this.configurate = function(ws) {
    ws.on('message', msg => {
      let data = JSON.parse(msg);
        
      switch(data.type) {
      case 'GAME_START':
        this.game.startGame();
        break;
      case 'PLAY_AGAIN':
        this.game.playAgain();
        break;
      case 'DISCONNECT': 
        this.game.del();
        break;
      }
    });

    ws.on('error', event => {
      console.log(event.code);
    });

    ws.on('close', event => {
      ws.isClosed = true;
      this.game.del();
    }); 

    ws.sendSafe = function(string) {
      if (this.isClosed) return;

      this.send(string); 
    }
  }
}

module.exports = GameMaster;

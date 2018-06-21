function PlayerMaster(player) {
  this.player = player;

  this.configurate = function(ws) {

    ws.on('message', signal => {
      console.log(signal); 
      switch(signal) {
      case '1':
        this.player.startMove('up');
        break;
      case '2':
        this.player.startMove('right');
        break;
      case '3':
        this.player.startMove('down');
        break;
      case '4':
        this.player.startMove('left');
        break;

      case 'E': 
        this.player.stopMove();
        break;

      case 'P':
        this.player.push(20);
        break;

      case 'DISCONNECT':
        this.player.delFromGame();
        break;
      case 'PLAY_AGAIN':
        this.player.wantAgain = true;
        break;
      }
    });

    ws.on('error', event => {
      console.log(event.code);
      this.player.delFromGame();
    });

    ws.on('close', event => {
      ws.isClosed = true;
      this.player.delFromGame(); 
      console.log('close socket');
    });
  }
}

module.exports = PlayerMaster;

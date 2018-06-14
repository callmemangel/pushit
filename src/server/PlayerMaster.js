function PlayerMaster(player) {
  this.player = player;

  this.configurate = function(ws) {

    ws.on('message', signal => {
      console.log(signal); 
      switch(signal) {
      case 'MOVE_UP':
        this.player.startMove('up');
        break;
      case 'MOVE_RIGHT':
        this.player.startMove('right');
        break;
      case 'MOVE_DOWN':
        this.player.startMove('down');
        break;
      case 'MOVE_LEFT':
        this.player.startMove('left');
        break;

      case 'MOVE_END': 
        this.player.stopMove();
        break;

      case 'PUSH':
        this.player.push(1);
        break;

      case 'DISCONNECT':
        this.player.delFromGame();
        break;
      }
    });

    ws.on('error', event => {
      console.log(event.code);
    });

    ws.on('close', event => {
      this.player.delFromGame(); 
    });
  }
}

module.exports = PlayerMaster;

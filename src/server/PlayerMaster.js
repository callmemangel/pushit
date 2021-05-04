function PlayerMaster(player) {
  this.player = player;

  this.configurate = function (socket) {
    socket.on("1", () => {
      this.player.startMove("up");
    });
    socket.on("2", () => {
      this.player.startMove("right");
    });
    socket.on("3", () => {
      this.player.startMove("down");
    });
    socket.on("4", () => {
      this.player.startMove("left");
    });
    socket.on("E", () => {
      this.player.stopMove();
    });
    socket.on("P", () => {
      // console.log("pushh");
      this.player.push(20);
    });
    socket.on("DISCONNECT", () => {
      this.player.delFromGame();
    });
    socket.on("PLAY_AGAIN", () => {
      this.player.wantAgain = true;
      this.player.game.addWantAgainPlayer();
    });
    socket.on("disconnect", () => {
      this.player.delFromGame();
    });
  };
}

module.exports = PlayerMaster;

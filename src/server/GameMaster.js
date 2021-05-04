function GameMaster(game) {
  this.game = game;

  this.configurate = function (socket) {
    socket.on("GAME_START", () => {
      this.game.startGame();
    });
    socket.on("PLAY_AGAIN", () => {
      this.game.playAgain();
    });
    socket.on("DISCONNECT", () => {
      this.game.del();
    });

    socket.on("disconnect", () => {
      this.game.del();
    });
  };
}

module.exports = GameMaster;

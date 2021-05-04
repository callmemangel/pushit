function Display(socket, game) {
  this.socket = socket;
  this.game = game;

  socket.on("disconnect", () => {
    console.log("DISPLAY CLOSED");
  });

  this.delFromGame = function () {
    game.delDisplay(this);
  };

  this.addToGame = function () {
    this.game.addDisplay(this);
  };

  this.renderWinner = function (colorIndex) {
    this.socket.emit("GOT_WINNER", colorIndex);
  };

  this.sendAgainSignal = function () {
    this.socket.emit("WANT_AGAIN");
  };

  this.close = function () {
    this.socket.emit("GAME_DELETE");
  };

  this.delPlayer = function (id) {
    this.socket.emit("DELETE_PLAYER", id);
  };

  this.killPlayer = function (id) {
    this.socket.emit("KILL_PLAYER", id);
  };

  this.sendCoords = function (coords) {
    this.socket.emit("C", coords.toString());
  };

  this.sendPlayer = function (player) {
    let obj = {
      x: player.x,
      y: player.y,
      colorIndex: player.colorIndex,
      id: player.id,
    };

    this.socket.emit("ADD_PLAYER", obj);
  };
}

module.exports = Display;

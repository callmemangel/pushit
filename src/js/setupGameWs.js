import io from "socket.io-client";

function setupWebSocket(code, gameMode) {
  const socket = io("wss://pushed.montecamo.dev", {
    path: "/game",
    query: {
      code, 
      gameMode,
    },
  });

  socket.on("test", () => {
    alert("test message from server");
  });

  socket.on("ERR", (code) => {
    switch (code) {
      case "404":
        //do err
        socket.disconnect();
        break;
    }
  });
  socket.on("405", () => {
    socket.close();
  });
  socket.on("C", (coords) => {
    this.setCoords(coords);
  });
  socket.on("GAME_READY", () => {
    window.ee.emit("GAME_READY");
  });
  socket.on("GOT_WINNER", (color) => {
    this.setState({ mode: "winner", winnerColorIndex: color });
  });
  socket.on("NEW_GAME", () => {
    this.setState({ mode: "start" });
  });
  socket.on("GAME_DELETE", () => {
    this.setState({ mode: "start" });
    socket.disconnect();
  });
  socket.on("PLAY_AGAIN", () => {
    window.ee.emit("GAME_START");
  });
  socket.on("WANT_AGAIN", () => {
    window.ee.emit("WANT_AGAIN");
  });
  socket.on("ADD_PLAYER", (player) => {
    console.warn("add player", player);
    let players = this.state.players;
    players[player.id] = player;
    this.setState({ players: players });
  });
  socket.on("DELETE_PLAYER", (id) => {
    let plrss = this.state.players;

    delete plrss[id];
    this.setState({ players: plrss });
    console.log("player deleted " + id);
  });
  socket.on("KILL_PLAYER", (id) => {
    let plrs = this.state.players;

    this.setState({ players: plrs });
    console.log("player killed " + id);
  });

  socket.on("disconnect", () => {
    console.warn("client game socket closed");
  });

  return socket;
}

export default setupWebSocket;

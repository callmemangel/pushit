import io from "socket.io-client";

function setup(code) {
  const socket = io("wss://pushed.montecamo.dev", {
    path: '/controls',
    query: {
      code,
    }
  });

  socket.on("SET_COLOR", (color) => {
    this.setState({ colorIndex: color });
  });
  socket.on("GAME_OVER", () => {
    this.setState({ mode: "game-over" });
  });
  socket.on("WINNER", () => {
    this.setState({ isWinner: true, mode: "game-over" });
  });
  socket.on("START_GAME", () => {
    console.warn('start game')
    this.setState({ mode: "play", isWinner: false });
  });
  socket.on("START_SCREEN", () => {
    this.setState({ mode: "start", isWinner: false });

    socket.disconnect();
  });
  socket.on("ERR", (code) => {
    this.setState({ isWinner: false });
    switch (code) {
      case "404":
        console.warn("game not found");
        //game not found
        break;
      case "405":
        console.warn("game is full");
        //game is full
        break;
    }
  });

  socket.on("connect", () => {
    this.setState({ mode: "wait" });
  });

  socket.on("disconnect", () => {
    console.warn("websocket closed");
  });

  return socket;
}

export default setup;

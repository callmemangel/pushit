function setup(code) {
  let ws = new WebSocket('ws:pushed.wiretty.club:8081code=' + code);
 
  ws.onopen = () => {
    this.setState({ mode: 'wait' }); 
  }

  ws.onclose = () => {
    alert('websocket closed');
  }

  ws.onmessage = msg => {
    let data = JSON.parse(msg.data); 

    switch(data.type) {
      case 'SET_COLOR':
        this.setState({ colorIndex: data.colorIndex });
        break;
      case 'GAME_OVER':
        this.setState({ mode: 'game-over' });
        break;
      case 'WINNER':
        this.setState({ isWinner: true, mode: 'game-over' });
        break;
      case 'START_GAME':
        this.setState({ mode: 'play', isWinner: false });
        break;
      case 'START_SCREEN':
        this.setState({ mode: 'start', isWinner: false });
        ws.close();
        break;
      case 'ERR':
        this.setState({ isWinner: false })
        switch(data.code) {
        case 404:
          alert('game not found');
          //game not found
          break;
        case 405:
          alert('game is full');
          //game is full
          break;
        }
       break;

      default:
        alert('not such case in client socket switch');
        break;
    }
  }
  
  ws.onerror = function(e) {
    alert('client socket err ' + e.code); 
  }

  return ws;
}

export default setup;

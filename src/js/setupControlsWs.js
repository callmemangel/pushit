function setup(code) {
  let ws = new WebSocket('ws:192.168.0.65:3002?code=' + code);
 
  ws.onopen = () => {
    alert('WebSocket is connected');
    this.setState({ mode: 'wait' }); 
  }

  ws.onclose = () => {
    this.setState({ mode: 'err' });
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
        this.setState({ mode: 'winner' });
        break;
      case 'START_GAME':
        this.setState({ mode: 'play' });
        break;
      case 'START_SCREEN':
        this.setState({ mode: 'start' })
        break;
      case 'ERR':
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

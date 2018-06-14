function setupWebSocket(code, gameMode) {
    let ws = new WebSocket('ws:192.168.0.65:3001?code=' + code + '&gameMode=' + gameMode); 
    
    ws.onclose = function() {
      alert('client game socket closed');
      //send err
    }

    ws.onopen = function() {
      alert('Game WebSocket connected'); 
    }

    ws.onerror = function(e) {
      alert('error ' + e.code);
    }

    ws.onmessage = event => {
      let msg = JSON.parse(event.data);
      
      switch (msg.type) {
        case 'test': 
          alert('test message from server');
          break;
        case 'ERR':
          switch(msg.code) {
          case 404:
            //do err 
            ws.close()
            break;
          }
          break;
        case 'COORDS':
          this.setCoords(msg.coords);
          break;
        case 'GAME_READY':
          window.ee.emit('GAME_READY');
          break;
        case 'GOT_WINNER':
          this.setState({ mode: 'winner', winnerColorIndex: msg.colorIndex });
          break;
        case 'NEW_GAME':
          this.setState({ mode: 'start' });
          break;
        case 'ADD_PLAYER':
          let players = this.state.players;
          players.push(msg.player);
          console.log(msg.player);
          this.setState({ players: players });
          break;
      }
    }
  return ws;
}  

export default setupWebSocket;

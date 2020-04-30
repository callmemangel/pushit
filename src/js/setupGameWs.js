function setupWebSocket(code, gameMode) {
    let ws = new WebSocket('wss:pushed.wiretty.club/socket?code=' + code + '&gameMode=' + gameMode); 
    
    ws.onclose = function() {
      alert('client game socket closed');
      //send err
    }

    ws.onopen = function() {
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
            ws.close();
            break;
          }
          case 405:
            //do err 
            ws.close();
            break;
          break;
        case 'C':
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
        case 'GAME_DELETE':
          this.setState({ mode: 'start' });
          ws.close();
          break;
        case 'PLAY_AGAIN':
          window.ee.emit('GAME_START');
          break;
        case 'WANT_AGAIN':
          window.ee.emit('WANT_AGAIN');
          break;
        case 'ADD_PLAYER':
          let players = this.state.players;
          players[msg.player.id] = msg.player;
          this.setState({ players: players });
          break;
        case 'DELETE_PLAYER':
          let plrss = this.state.players;

          delete plrss[msg.id];
          this.setState({ players: plrss });
          console.log('player deleted ' + msg.id);
          break;
        case 'KILL_PLAYER':
          let plrs = this.state.players;

          this.setState({ players: plrs });
          console.log('player killed ' + msg.id);
 
          break;
      }
    }
  return ws;
}  

export default setupWebSocket;

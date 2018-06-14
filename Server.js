const express = require('express');
const path = require('path');
const ws = require('ws'); 0
var url = require('url');

const app = express(); 
const playerMasterWs = new ws.Server({ port: 3002 });
const gameMasterWs = new ws.Server({ port: 3001 });

const PlayerMaster = require('./src/server/PlayerMaster.js');
const GameMaster = require('./src/server/GameMaster.js');
const AutoGameMaster = require('./src/server/AutoGameMaster.js');
const Game = require('./src/server/Game.js');
const Player = require('./src/server/Player.js');
const Display = require('./src/server/Display.js');

const port = 3000;

let games = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/dist/', express.static(path.join(__dirname, './dist')));

games.findGame = function(code) {
  for (let i = 0; i < games.length; i++) {
    if (games[i].code == code) {
      return games[i]; 
    } 
  }
  return null;
}

games.setOnFree = function(game) {
  for (let i = 0; i < games.length + 1; i++) {
    if (!games[i]) {
      game.id = i;
      games[i] = game;
      return;
    }
  } 
}

function getReqCode(req) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  return query.code;
}

gameMasterWs.on('connection', (ws, req) => {
  let code = getReqCode(req);

  console.log(`got connection to game display with code = ${code}`);

  let game = games.findGame(code); 

  if (!game) {
    console.log(`game with code ${code} not found`);
    ws.send(JSON.stringify({ type: 'ERR', code: 404 }));
    ws.close();
    return;
  }
  
  if (!game.freeDisplaySpaces) {
    console.log(`game with code ${code} all slots are full`);
    ws.send(JSON.stringify({ type: 'ERR', code: 405 }));
    ws.close();
    return;
  }

  let display = new Display(ws, game);
  display.addToGame();

  if (game.masterSet === true) return;
  
  let gameMaster = game.type === 'local' ? new GameMaster(game) :
                                           new AutoGameMaster(game);
  gameMaster.configurate(ws);
});

playerMasterWs.on('connection', (ws, req) => {
  let code = getReqCode(req);

  console.log(`got connection to game players with code = ${code}`);

  let game = games.findGame(code);
  
  if (!game) {
    console.log(`game with code ${code} not found`);
    ws.send(JSON.stringify({ type: 'ERR', code: 404 }));
    ws.close();
    return;
  }

  if (!game.freePlayerSpaces) {
    console.log(`game with code ${code} all slots are full`);
    ws.send(JSON.stringify({ type: 'ERR', code: 405 }));
    ws.close();
    return;
  }

  let player = new Player(ws, game, customColor = null);
  player.addToGame();
  player.setInitialCoords();
  player.setInitialColor();

  game.sendPlayer(player);

  let playerMaster = new PlayerMaster(player); 
  playerMaster.configurate(ws);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/game.html'));
});

app.get('/play', (req, res) => {
  res.sendFile(path.join(__dirname + '/controls.html'));
});

app.post('/generate', (req, res) => {
  let code = '1AB2'; 
  let mode = req.body.mode;
  let type = 'local';

  let game = new Game(code, mode, type);

  games.setOnFree(game); 

  res.send('1AB2');
});


app.post('/connect', (req, res) => {
  let code = req.body.code;

  console.log(`try to verify client with code ${code}`);
  
  if(games.findGame(code)) {
    return res.send('true'); 
  }
  console.log('not verified');
  res.send('false');
});

app.post('/play_online', (req, res) => {
  
  //find game with such type   
  //if no - create 
  //send code to player 
});

app.listen(port);

console.log(`Magic on port ${port}`);

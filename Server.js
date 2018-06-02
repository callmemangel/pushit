const express = require('express');
const path = require('path');
const ws = require('ws'); 

const app = express(); 
const playerWs = ws.Server({ port: 8081 });
const gameWs = ws.Server({ port: 8081 });

const playerSetup = require('./src/playerWS.js');
const gameSetup = require('./src/gameWS.js');

let games = [];

gameWs.on('connection', (ws) => {
  let game = gameSetup(ws);
  games.push
});

playerWs.on('connection', (ws) => {
  let player = playerSetup(ws);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'game.html'));
});

app.get('/play', (req, res) => {
  res.sendFile(path.join(__dirname + 'controls.html'));
});

app.post('/generate', (req, res) => {
  let code = //random code 
  

  res.send('1AB2');
});

app.post('/connect', (req, res) => {
  let code = req.body.code;

  for (let i = 0; i < games.length; i++) {
    if (games[i].id == code) {
      return res.send('true'); 
    }
  } 
  res.send('false');
});



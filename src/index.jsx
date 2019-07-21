
import React from 'react';
import { Router } from '@reach/router';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import style from './style';

import Home from '@/views/Home';
import Room from '@/views/Room';

const theme = {
  main: '#F2F1EF',
  sub: '#9FCCC9',
  active: '#FF7E57',
  pale: '#87806D',
  dark: '#3C3642',
  fontBig: '108px',
  fontStandart: '60px',
};

console.warn('style', style);
const RouterComponent = () => (
  <Router className={style.root}>
    <Home path="/" />
    <Room path="/:id" />
  </Router>
);

render((
  <ThemeProvider theme={theme}>
    <RouterComponent />
  </ThemeProvider>
), document.getElementById('root'));
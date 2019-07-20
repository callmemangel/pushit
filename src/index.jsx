
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './style';

import App from '@/views/Home';

const theme = {
  main: '#F2F1EF',
  sub: '#9FCCC9',
  active: '#FF7E57',
  pale: '#87806D',
  dark: '#3C3642',
};

render((
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
), document.getElementById('root'));
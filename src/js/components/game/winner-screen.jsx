import React from 'react';
import { Container, CenterWrapper } from '../../styled-components';

import WinnerTitle from './winner-title.jsx';
import WinnerPlayer from './winner-player.jsx';
import WinnerButtons from './winner-buttons.jsx';

import { getColor } from '../../helpers.js';


let WinnerScreen = props => (
  <CenterWrapper>
    <Container height='100%'>
      <WinnerButtons />
    </Container>
    <Container column height='100%'>
      <WinnerTitle /> 
      <WinnerPlayer color={getColor(props.color)}/>
    </Container>
  </CenterWrapper>
)

export default WinnerScreen;

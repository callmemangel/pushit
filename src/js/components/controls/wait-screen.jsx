import React from 'react';
import styled from 'styled-components';
import { palette, Container, CenterWrapper } from '../../styled-components';

import PlayInfo from './play-info.jsx';


const FlexStart = Container.extend`
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 100px;
`;


const FlexEnd = Container.extend`
  align-items: flex-end;
  padding-bottom: 100px;
  box-sizing: border-box;
`;

const P = styled.p`
  max-width: 90%;
  font-size: 40px;
  font-family: 'Anton', sans-serif;
  color: ${palette.RED}
`;

let WaitScreen = props => (
  <CenterWrapper>
    <FlexStart height='100%'>
      <P className='wait-title'>
        {props.mode === 'connecting' ? 'Connecting...' 
                                     : 'Connected, waiting for game to start'}
      </P> 
    </FlexStart>
    <FlexEnd height='100%'>

      <PlayInfo />
    </FlexEnd>
  </CenterWrapper>
)

export default WaitScreen;

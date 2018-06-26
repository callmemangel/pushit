import React from 'react';
import styled from 'styled-components'
import { backgroundProps } from '../../styled-components/props-receivers';

let Winner = styled.div`
  width: 200px;
  height: 200px;
  ${backgroundProps} 
`

var WinnerPlayer = (props) => {
  return <Winner background={props.color}></Winner> 
}

export default WinnerPlayer;

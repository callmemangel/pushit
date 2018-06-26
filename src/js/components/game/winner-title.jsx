import React from 'react';
import styled from 'styled-components';
import { colorProps } from '../../styled-components/props-receivers';

const Span = styled.span`
  ${colorProps}
`;

const P = styled.p`
  font-size: ${props => props.size ? props.size : '16px'};
  font-family: 'Poppins', sans-serif;
  font-weight: lighter;
  letter-spacing: 5px;
  margin-bottom: 150px;
`;

var WinnerTitle = () => (
  <P size='110px'>
    <Span pink>W</Span>
    <Span blue>I</Span>
    <Span orange>N</Span>
    <Span sandy>N</Span>
    <Span green>E</Span>
    <Span red>R</Span>
  </P>
)

export default WinnerTitle;

import styled from 'styled-components';
import * as palette from './colors.js';
import { colorProps } from './props-receivers';

const Button = styled.button`
  background: transparent;
  border: 0;
  display: block;
  outline: none;
  font-family: ${props => props.bold ? 'Anton' : 'Poppins'}, sans-serif;
  font-size: ${props => props.fontSize || '16px' };
  transition: color .5s;
  ${colorProps};
  &:hover {
    cursor: pointer; 
    color: ${palette.ORANGE};
  };
`;

export default Button;

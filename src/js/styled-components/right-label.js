import styled from 'styled-components';
import { colorProps } from './props-receivers';

const RightLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  display: inline-block; 
  vertical-align: top;
  font-size: ${props => props.fontSize || '16px'}; 
  ${colorProps};
  position: absolute;
  right: 2px;
`;

export default RightLabel;

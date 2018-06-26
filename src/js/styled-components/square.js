import styled from 'styled-components';
import { backgroundProps } from './props-receivers';

const Square = styled.div`
  display: inline-block;
  width: ${props => props.small ? '25px' : '80px'};
  height: ${props => props.small ? '25px' : '80px'};
  margin: ${props => props.small ? '2px' : '0px'};
  ${backgroundProps};
`;

export default Square;

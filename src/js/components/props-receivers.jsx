import { css } from 'styled-components';
import * as palette from './Colors.js';


export const alignProps = props => css`
  ${props.right && 'float: right'}
  
  ${props.left && 'float: left'}
`;

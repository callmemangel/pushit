import { css } from 'styled-components';
import * as palette from '../colors.js';

const colorProps = props => css`
  ${props.red && `color: ${palette.RED}`}
  ${props.blue && `color: ${palette.BLUE}`}
  ${props.orange && `color: ${palette.ORANGE}`}
  ${props.pink && `color: ${palette.PINK}`}
  ${props.sandy && `color: ${palette.SANDY}`}
  ${props.green && `color: ${palette.GREEN}`}

  ${props.color ? `color: ${palette[props.color.toUpperCase()]}` : null}
`;

export default colorProps;

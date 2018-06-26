import { css } from 'styled-components';
import * as palette from '../colors.js';

const backgroundProps = props => css`
  ${props.red && `background: ${palette.RED}`}
  ${props.blue && `background: ${palette.BLUE}`}
  ${props.orange && `background: ${palette.ORANGE}`}
  ${props.pink && `background: ${palette.PINK}`}
  ${props.sandy && `background: ${palette.SANDY}`}
  ${props.green && `background: ${palette.GREEN}`}

  ${props.background ? `background: ${palette[props.background.toUpperCase()]}` : null}
`;

export default backgroundProps;

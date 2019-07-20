
import styled from 'styled-components';

import RandomSvg from '@/assets/shuffle.svg';

export const RandomIcon = styled(RandomSvg)`
  width: 117px;
  height: 60%;
  fill: ${props => props.theme.dark};
`;

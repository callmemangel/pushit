
import styled from 'styled-components';

import BackSvg from '@/assets/back.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const BackIcon = styled(BackSvg)`
  fill: ${props => props.theme.pale};
  position: absolute;

  left: 5%;
  top: 50%;
  transform: translateY(-50%);

  width: 70px;
`;


import styled from 'styled-components';

import RoomSvg from '@/assets/room.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RoomIcon = styled(RoomSvg)`
  fill: ${props => props.theme.sub};
`;

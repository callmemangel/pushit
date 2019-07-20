
import styled from 'styled-components';

export const Divider = styled.span`
  font-size: ${props => props.size === 'big' ? 144: 96}px;
  color: ${props => props.theme[props.color]};
`;

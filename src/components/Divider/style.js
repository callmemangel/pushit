
import styled from 'styled-components';

export const Divider = styled.span`
  font-size: ${props => (
    props.size === 'big'
      ? props.theme.fontBig
      : props.theme.fontStandard
  )};
  color: ${props => props.theme[props.color]};
`;

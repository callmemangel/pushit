
import styled from 'styled-components';

export const Button = styled.button`
  font-size: ${props => props.theme.fontStandart};
  background: none;

  padding: 0;
  border: 0;

  color: ${props => props.theme[props.color]};
`;

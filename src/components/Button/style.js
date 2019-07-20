
import styled from 'styled-components';

export const Button = styled.button`
  font-size: 96px;
  background: none;

  padding: 0;
  border: 0;

  color: ${props => props.theme[props.color]};
`;


import styled from 'styled-components';

export const Input = styled.input`
  height: 100%;
  width: 30%;

  font-size: ${props => props.theme.fontStandart};

  background: ${props => props.theme.sub};
  color: ${props => props.theme.main};

  border-radius: 10px;
  border: 0;
  outline: none;
  padding: 0px 25px;


  &::placeholder {
    color: ${props => props.theme.main};
    opacity: 0.9;
  }
`;

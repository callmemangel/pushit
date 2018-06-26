import styled from 'styled-components';
import * as palette from './colors.js';

const InviteInput = styled.input`
  border-radius: 10px;
  border: 1px solid ${palette.ORANGE};
  color: ${palette.PINK};
  height: 76px;
  width: 320px;
  display: block;
  font-size: 48px;
  padding-left: 20px;
  &:disabled {
    background: #fff; 
  }
  &:focus {
    outline: none; 
  }
`;

export default InviteInput;

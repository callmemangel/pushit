
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background: ${props => props.theme.main};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 80px;
  width: 72%;
  min-width: 870px;
`;

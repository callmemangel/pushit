
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    height: 100%; 
    flex-basis: 50%;
  };
`;


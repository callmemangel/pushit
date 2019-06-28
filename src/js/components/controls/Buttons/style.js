
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  };
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;


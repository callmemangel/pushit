import styled from 'styled-components';

const Container = styled.div`
  min-height: 30%;
  height: auto;
  display: flex;
  ${props => props.column && 'flex-direction: column'};
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    height: ${props => props.height ? props.height : '50%'}; 
    flex-basis: 50%;
  };
`;

export default Container;

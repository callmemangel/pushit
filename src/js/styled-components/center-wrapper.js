import styled from 'styled-components';

const CenterWrapper = styled.div`
  height: 100%;
  @media screen and (min-width: 900px) {
    flex-wrap: wrap;
    display: flex;
  }
  ${props => props.column && 'flex-direction: column'};
`;

export default CenterWrapper;

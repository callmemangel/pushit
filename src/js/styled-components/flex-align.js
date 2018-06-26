import styled from 'styled-components';

const FlexAlign = styled.div`
  flex: 50%;
  ${props => props.right && 'text-align: right'};
`;

export default FlexAlign;

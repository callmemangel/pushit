
import styled from 'styled-components';

const sizeMap = props => {
  switch (props.size) {
    case 'small': return '50px';
    case 'standart': return '200px';
    case 'big': return '250px';
  }
}

export const Player = styled.div`
  width: ${sizeMap};
  height: ${sizeMap};
  background: ${props => props.theme[props.color]}
`;

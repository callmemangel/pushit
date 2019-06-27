
import styled from 'styled-components';

import { backgroundProps } from '@/js/styled-components/props-receivers/index.js';

export const Button = styled.button`
  padding: 0;
  outline: none;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 20px;

  width: ${props => props.large
    ? '100%'
    : '100px'
  }
  height: ${props => props.large
    ? '100%'
    : '50px'
  }
  ${backgroundProps}; 
`;

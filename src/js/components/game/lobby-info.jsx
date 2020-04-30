import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

const Info = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: ${palette.RED};
  border-bottom: 1px solid ${palette.BLUE};
  padding-bottom: 20px;
`;

var LobbyInfo = props => (
  <Info>
    open pushed.wiretty.club/play<br/>
    on your smartphone and<br/>
    insert code there<br/>
  </Info>
)


export default LobbyInfo;

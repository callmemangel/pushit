import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

const PlayInfo = styled.div`
  font-size: 30px;
`;

const P1 = styled.p`
  color: ${palette.PINK};
`;

const P2 = styled.p`
  color: ${palette.BLUE};
  margin-top: 20px;
`

var ConnectInfo = props => (
  <PlayInfo>
    <P1>
      Your goal is to push all <br/>
      players outside the border
    </P1>
    <P2>
      Buttons on the left side <br/>
      to move, right to push
    </P2>
  </PlayInfo>
)

export default ConnectInfo;

import React from 'react';
import styled from 'styled-components';
import { palette } from '../../styled-components';

const ConnectedPlayer = styled.div`
  width: 100%;
  height: 17%;
  padding: 1px;
  background: linear-gradient(to right, ${palette.ORANGE}, ${palette.PINK});
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
`;


const Title = styled.p`
  color: #FEFEFE;
  font-size: 30px;
  margin-right: 25px;
`;

var Player = () => (
  <ConnectedPlayer>
    <Title>Player Connected</Title>
  </ConnectedPlayer>
)

export default Player;


import React from 'react';

import * as S from './style';

import Players from './Players';

const Info = ({ id: roomId }) => (
  <S.Wrapper>
    <S.RoomIcon />
    <Players />
  </S.Wrapper>
);

export default Info;


import React from 'react';

import * as S from './style';

import Header from './Header';

const Room = ({ id: roomId }) => (
  <S.Wrapper>
    <Header roomId={+roomId} />
  </S.Wrapper>
);

export default Room;


import React from 'react';

import * as S from './style';

import Header from './Header';
import Info from './Info';
import Actions from './Actions';

const Room = ({ id: roomId }) => (
  <S.Wrapper>
    <Header roomId={+roomId} />
    <S.Body>
      <Info />
      <Actions />
    </S.Body>
  </S.Wrapper>
);

export default Room;


import React from 'react';

import * as S from './style';

import Player from '@/components/Player';

const Players = ({ id: roomId }) => (
  <S.Wrapper>
    {
      [0, 1, 2, 3].map(colorIndex => (
        <Player size="small" colorIndex={colorIndex} />
      ))
    }
  </S.Wrapper>
);

export default Players;

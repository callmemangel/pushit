
import React from 'react';

import * as S from './style';

import Button from '@/components/Button';
import Divider from '@/components/Divider';

const Actions = () => (
  <S.Wrapper>
    <Button>Player</Button>
    <Divider color="dark" />
    <Button color="pale">Viewer</Button>
  </S.Wrapper>
);

export default Actions;

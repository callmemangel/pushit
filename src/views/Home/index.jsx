
import React, { Component } from 'react';

import Divider from '@/components/Divider';
import Button from '@/components/Button';

import Input from './Input';
import Random from './Random';

import * as S from './style.js';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Input />
        <Divider size="big" />
        <Random />
        <Divider size="big" />
        <Button color="pale">Private</Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home

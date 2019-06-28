
import React, { Component } from 'react';
import { getColor } from '@/js/helpers.js';

import Button from './Button/index.jsx';
import * as S from './style.js';

function onClickStart(e) {
  console.log(e.target.id);
  window.ee.emit('START_MOVE', e.target.id);
}

function onClickEnd() {
  window.ee.emit('MOVE_END');
}

const BUTTON_IDS = ['up', 'right', 'down', 'left'];

var ControlButtons = ({ colorIndex }) => {
  let color = getColor(colorIndex);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Row>
          <Button 
            id="up"
            background={color}
            onClickStart={onClickStart}
            onClickEnd={onClickEnd}
          />
        </S.Row>
        <S.Row>
          {['right', 'left'].map(id => (
            <Button 
              id={id}
              key={id}
              background={color}
              onClickStart={onClickStart}
              onClickEnd={onClickEnd}
            />
          ))}
        </S.Row>
        <S.Row>
          <Button 
            id="down"
            background={color}
            onClickStart={onClickStart}
            onClickEnd={onClickEnd}
          />
        </S.Row>
      </S.Container>
      <S.Container>
        <Button
          id='push'
          background={color}
          onClickStart={onClickStart}
          large
        />
      </S.Container>
    </S.Wrapper>
  )
}

export default ControlButtons;


import React, { Component } from 'react';

import * as S from './style.js';

class Button extends Component {
  render() {
    const {
      onClickStart,
      onClickEnd,
      background,
      large,
      id,
      style,
    } = this.props;

    return (
      <S.Button
        id={id}
        style={style}
        onTouchStart={onClickStart}
        onTouchEnd={onClickEnd}
        onMouseDown={onClickStart}
        onMouseUp={onClickEnd}
        background={background}
        large={large}
      >
        {id}
      </S.Button>
    );
  }
};

export default Button;

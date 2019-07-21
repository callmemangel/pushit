
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

import Code from './Code';

const Header = ({ roomId }) => (
  <S.Wrapper>
    <S.BackIcon />
    <Code code={roomId} />
  </S.Wrapper>   
);

Header.propTypes = {
  roomId: PropTypes.number.isRequired,
}

export default Header;

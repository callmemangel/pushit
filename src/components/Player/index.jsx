
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const colorMap = ['active', 'dark', 'pale', 'sunny'];
const Player = ({ size, colorIndex }) => (
  <S.Player size={size} color={colorMap[colorIndex]} />
);

Player.propTypes = {
  size: PropTypes.oneOf(['small', 'standart', 'big']),
  colorIndex: PropTypes.oneOf([0, 1, 2, 3]),
}

export default Player;

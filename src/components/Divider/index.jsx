
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style.js';

const Divider = ({ size, color }) => {
  return (
    <S.Divider size={size} color={color}>/</S.Divider>
  );
}

Divider.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

Divider.defaultProps = {
  color: 'active',
  size: 'standard',
}

export default Divider;

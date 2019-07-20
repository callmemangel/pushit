
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style.js';

const Button = ({ children, color }) => {
  return (
    <S.Button color={color}>{children}</S.Button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
}

Button.defaultProps = {
  color: 'active',
}

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style.js';

const Input = ({ onInput, value }) => {
  return (
    <S.Input onInput={onInput} value={value} placeholder="####" />
  );
}

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;
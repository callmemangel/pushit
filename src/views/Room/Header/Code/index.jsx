
import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';


const Code = ({ code }) => <S.Code>{code}</S.Code>;

Code.propTypes = {
  code: PropTypes.number.isRequired,
}

export default Code;
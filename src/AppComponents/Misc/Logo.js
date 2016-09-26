import React, { PropTypes } from 'react';
import { Image } from 'react-native';

export const Logo = ({ style }) => (
  <Image style={style} source={require('../../../assets/logo.png')} />
);

Logo.propTypes = {
  style: PropTypes.any,
};

import React, { PropTypes } from 'react';
import {
	View,
	Image,
} from 'react-native';

import { Styles } from 'AppStyles';

export const PImage = ({ type, size, border }) => {
  const bRadius = (type === 'circle') ? (size / 2) : 0;
  const bBorder = (border) ? 2 : 0;
  return (
    <View>
      <Image
        source={{
          uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'
        }}
        style={{
          height: size,
          width: size,
          borderRadius: bRadius,
          borderColor: Styles.COLOR_DARKER_15,
          borderWidth: bBorder,
        }}
      />
    </View>
  );
};

PImage.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  border: PropTypes.bool.isRequired,
};

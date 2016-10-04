import React, { PropTypes } from 'react';
import {
	View,
	Image,
} from 'react-native';

import { Styles } from 'AppStyles';

export const ProfilePhoto = ({ type, size, border, source }) => {
  const borderRadius = (type === 'circle') ? (size / 2) : 0;
  const borderBorder = (border) ? 2 : 0;
  return (
    <View>
      <Image
        source={{
          uri: source
        }}
        style={{
          height: size,
          width: size,
          borderRadius: borderRadius,
          borderColor: Styles.COLOR_DARKER_15,
          borderWidth: borderBorder,
        }}
      />
    </View>
  );
};

ProfilePhoto.defaultProps = {
  source: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'
};

ProfilePhoto.propTypes = {
  type: PropTypes.string.isRequired,
  source: PropTypes.string,
  size: PropTypes.number.isRequired,
  border: PropTypes.bool.isRequired,
};

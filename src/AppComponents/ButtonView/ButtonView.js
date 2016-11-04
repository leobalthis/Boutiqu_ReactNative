import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ButtonView = ({ styleContainer, iconInfo, imageInfo, callback }) => (
  <View style={[styles.container, styleContainer]} >
    <TouchableOpacity
      onPress={callback}
      style={{ flex: 1,
        justifyContent: 'center', alignItems: 'center', marginTop: 2 }}
    >
    {
      iconInfo
      ? <Icon name={iconInfo.name} size={25} color={iconInfo.color} />
      : <Image source={require(imageInfo.source)} style={imageInfo.style} />
    }
    </TouchableOpacity>
  </View>
);

ButtonView.propTypes = {
  styleContainer: PropTypes.any,
  callback: PropTypes.func.isRequired,
  iconInfo: PropTypes.object,
  imageInfo: PropTypes.object,
};

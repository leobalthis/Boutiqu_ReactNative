import React, { PropTypes } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: Styles.COLOR_GREEN,
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_WHITE
  },
});

export const NavBarClose = ({ navigator }) => (
  <TouchableHighlight
    onPress={() => navigator.pop()}
    style={styles.button}
  >
    <Icon name="close" style={styles.icon} />
  </TouchableHighlight>
);

NavBarClose.propTypes = {
  navigator: PropTypes.object.isRequired,
};

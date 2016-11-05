import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
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

export const NavBarSideMenu = ({ openMenu }) => (
  <TouchableOpacity
    onPress={openMenu}
    style={styles.button}
  >
    <Icon name="bars" style={styles.icon} />
  </TouchableOpacity>
);

NavBarSideMenu.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Styles } from 'AppStyles';

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
    borderTopColor: Styles.COLOR_LIGHTER_5,
    borderTopWidth: 1,
  },
  menuItem: {
    fontSize: Styles.FONT_SIZE_SMALL,
    color: Styles.FONT_COLOR,
    fontWeight: '300',
  },
  icon: {
    alignItems: 'center',
    fontSize: 20,
    width: 20,
    marginTop: -3,
    marginRight: 8,
    marginLeft: 5,
    color: Styles.COLOR_GREEN
  }
});

const renderNavText = ({ label, routeId }) => {
  let text;
  if (label) {
    text = label;
  } else {
    text = routeId.toUpperCase();
  }
  return text;
};

export const MenuNav = ({ changeView, routeId, label, icon, data = null }) => (
  <TouchableHighlight
    onPress={() => changeView(routeId, data)}
  >
    <View style={styles.wrapper}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.menuItem}>
        {renderNavText({ label, routeId })}
      </Text>
    </View>
  </TouchableHighlight>
);

MenuNav.propTypes = {
  changeView: PropTypes.func.isRequired,
  routeId: PropTypes.string.isRequired,
  data: PropTypes.object,
  label: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

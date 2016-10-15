import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Styles } from 'AppStyles';

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
    marginBottom: 10
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  menuItem: {
    fontSize: Styles.FONT_SIZE,
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

export const MenuNav = ({ changeView, routeId, label, source, data = null }) => {
  // const src = require(source);
  return (
    <TouchableHighlight
      onPress={() => changeView(routeId, data)}
    >
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          // source={t}
          source={require('../../../assets/home_icon_green@1x.png')}
          // source={src}
        />
        <Text style={styles.menuItem}>
          {renderNavText({ label, routeId })}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

MenuNav.propTypes = {
  changeView: PropTypes.func.isRequired,
  routeId: PropTypes.string.isRequired,
  data: PropTypes.object,
  label: PropTypes.string,
  source: PropTypes.string.isRequired,
};

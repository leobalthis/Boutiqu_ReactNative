import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import { PlaceCard } from './PlaceCard';
import Styles from './Styles';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const NavBarSideMenu = props => (
  <TouchableHighlight
    onPress={props.openMenu}
    style={{
      justifyContent: 'center',
      padding: 10,
      backgroundColor: Styles.COLOR_GREEN,
    }}>
    <Icon name='bars' style={styles.icon} />
  </TouchableHighlight>
)

NavBarSideMenu.propTypes = {
  openMenu: React.PropTypes.func.isRequired,
};

export class MyLikes extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationBar tintColor={Styles.COLOR_GREEN}
          title={{title: 'My Likes'}}
          leftButton={<NavBarSideMenu {...this.props}/>} />
          <PlaceCard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_WHITE,
  }
});

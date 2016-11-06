import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const NavBarSideMenu = props => (
  <TouchableHighlight
    onPress={props.openMenu}
    style={{
      justifyContent: 'center',
      padding: 10,
    }}>
    <Icon name="bars" size={20} color='#000' />
  </TouchableHighlight>
)

NavBarSideMenu.propTypes = {
  openMenu: React.PropTypes.func.isRequired,
};

export class PostAReview extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <NavigationBar
          title={{title: 'My Likes'}}
          leftButton={<NavBarSideMenu {...this.props} />}
        />
        <Text>Post a review</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
var ScrollableTabView = require('react-native-scrollable-tab-view');

const NavBarSideMenu = props => (
  <TouchableHighlight
    onPress={props.openMenu}
    style={{
      justifyContent: "center",
      padding: 10,
    }}>
    <Icon name="bars" size={20} color="#000" />
  </TouchableHighlight>
)

NavBarSideMenu.propTypes = {
  openMenu: React.PropTypes.func.isRequired,
};

export class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationBar
          title={{title: "Boutiq"}}
          leftButton={<NavBarSideMenu {...this.props}/>} />
        <ScrollableTabView>
          <View tabLabel="My Network">
            <Text>My Network</Text>
          </View>
          <View tabLabel="Discover">
            <Text>Discover</Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

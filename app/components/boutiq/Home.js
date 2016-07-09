import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Styles from './Styles';

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

export class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationBar
          title={{title: 'Boutiq'}}
          leftButton={<NavBarSideMenu {...this.props}/>} />
        <ScrollableTabView style={styles.tabs}>
          <View tabLabel='My Network' style={styles.tabsContent}>
            <Text>My Network</Text>
          </View>
          <View tabLabel='Discover' style={styles.tabsContent}>
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
    backgroundColor: Styles.COLOR_WHITE,
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_WHITE
  },
  tabs: {
    backgroundColor: Styles.COLOR_GREEN,
  },
  tabsContent: {
    borderBottomColor: Styles.COLOR_WHITE,
    backgroundColor: Styles.COLOR_WHITE,
    padding: 20,
  }
});

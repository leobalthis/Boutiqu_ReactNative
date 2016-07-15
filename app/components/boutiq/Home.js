import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { PImage } from './PImage';
import { LastReviewsPImage } from './LastReviewsPImage';
import { Search } from './Search';
import Styles from './Styles';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
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

export class Home extends Component {

  state = {
    text: '',
  }

  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <NavigationBar tintColor={Styles.COLOR_GREEN}
            title={{title: 'Boutiq'}}
            leftButton={<NavBarSideMenu {...this.props}/>} />
        <View>
          <Search/>
        </View>

          <ScrollableTabView style={styles.tabs}>
            <View tabLabel='My Network' style={styles.tabsContent}>
              <PImage type='circle' size={40}/>
            <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder='Post a status'
          value={this.state.text}/>
              <Icon name='pencil-square-o' style={styles.postIcon}/>
            </View>
            <View tabLabel='Discover' style={styles.tabsContent}>
              <Text>Discover</Text>
            </View>
          </ScrollableTabView>
        </View>
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
  postIcon: {
    fontSize: 30,
    padding: 5,
    color: Styles.COLOR_DARKER_15
  },
  tabs: {
    backgroundColor: Styles.COLOR_GREEN,
  },
  tabsContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Styles.COLOR_WHITE,
    padding: 10,
  },
  textInput: {
    width: Styles.CARD_WIDTH - Styles.CARD_PADDING_X - 50,
    height: 40,
    padding: 8,
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.COLOR_DARKER_15,
    borderColor: Styles.COLOR_DARKER_15,
    borderWidth: 1,
  }
});

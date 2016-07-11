import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
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

  state = {
    text: '',
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationBar
          title={{title: 'Boutiq'}}
          leftButton={<NavBarSideMenu {...this.props}/>} />
        <ScrollableTabView style={styles.tabs}>
          <View tabLabel='My Network' style={styles.tabsContent}>
            <Image source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'}}
       style={styles.userImg} />
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
    color: Styles.COLOR_GREY
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
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textInput: {
    width: Styles.CARD_WIDTH - Styles.CARD_PADDING_X - 50,
    height: 40,
    padding: 8,
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.COLOR_GREY,
    borderColor: Styles.COLOR_GREY,
    borderWidth: 1,
  }
});

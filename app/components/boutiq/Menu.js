import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from 'react-native-fbsdk';

import { MenuNav } from './MenuNav';
import { PImage } from './PImage';
import Styles from './Styles';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

export class Menu extends Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.wrapper}>
        {/*<Image
          style={{
            height: 150,
          }}
          source={{uri: this.state.url}}></Image>*/}
          <TouchableHighlight>
          <View style={styles.profileWrapper}>
            <PImage type='circle' size={60}/>
            <View style={styles.profileTextWrapper}>
              <Text style={styles.profileTextUser}>Tina Azimi</Text>
              <Text style={styles.profileText}>My Profile</Text>
            </View>
          </View>
        </TouchableHighlight>
        <MenuNav routeId='myprofile' label='My Profile' icon='user' {...this.props}/>
        <MenuNav routeId='home' icon='home' {...this.props}/>
        <MenuNav routeId='discover' icon='bolt' {...this.props}/>
        <MenuNav routeId='mylikes' icon='heart' label='My Likes' {...this.props}/>
        <MenuNav routeId='postareview' icon='plus-circle' label='Post a review' {...this.props}/>
        <MenuNav routeId='contactus' icon='envelope-o' label='Contact us' {...this.props}/>
        <TouchableHighlight 
          onPress={()=>{
            LoginManager.logOut();
            this.props.onLogout();
          }}>
          <View style={styles.logoutWrapper}>
            <Text style={styles.logOut}>
              <Icon name='sign-out' style={styles.icon}/>
              Logout
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Styles.COLOR_WHITE,
    paddingTop: 20,
    borderRightWidth: 1,
    borderColor: Styles.COLOR_LIGHTER_5,
  },
  logoutWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding:10,
    borderBottomColor: Styles.COLOR_LIGHTER_5,
    borderBottomWidth: 1,    
    borderTopColor: Styles.COLOR_LIGHTER_5,
    borderTopWidth: 1,
  },
  logOut: {
    fontSize: Styles.FONT_SIZE_SMALL,
    color: Styles.FONT_COLOR,
    fontWeight: '300',
  },
  icon: {
    fontSize: 20,
    width: 20,
    marginTop: -3,
    marginRight: 8,
    marginLeft: 30,
    color: Styles.COLOR_GREEN
  },
  profileWrapper: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 20,
  },
  profileTextWrapper: {
    padding: 5,
  },
  profileTextUser: {
    fontSize: Styles.FONT_SIZE,
    color: Styles.FONT_COLOR,
    fontWeight: '500',
    marginLeft: 10,
  },
  profileText: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.FONT_COLOR,
    fontWeight: '300',    
    marginLeft: 10,
  }
});

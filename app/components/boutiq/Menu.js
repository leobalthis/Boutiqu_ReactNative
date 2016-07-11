import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { MenuNav } from './MenuNav';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

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
            <Image style={styles.userImg} source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'}} />
            <View style={styles.profileTextWrapper}>
              <Text style={styles.profileTextUser}>Tina Azimi</Text>
              <Text style={styles.profileText}>Tina Az</Text>
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
    marginTop: 20,
    borderRightWidth: 1,
    borderColor: Styles.COLOR_GREY,
  },
  logoutWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding:10,
    borderBottomColor: Styles.COLOR_LIGHT_GREY,
    borderBottomWidth: 1,    
    borderTopColor: Styles.COLOR_LIGHT_GREY,
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
  userImg: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 30,
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

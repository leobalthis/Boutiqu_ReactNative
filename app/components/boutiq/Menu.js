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
        <Image source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'}}
       style={styles.userImg} />
        <MenuNav routeId='myprofile' label='My Profile' icon='user' {...this.props}/>
        <MenuNav routeId='home' icon='home' {...this.props}/>
        <MenuNav routeId='discover' icon='bolt' {...this.props}/>
        <MenuNav routeId='mylikes' icon='heart' label='My Likes' {...this.props}/>
        <MenuNav routeId='postareview' icon='plus-circle' label='Post a review' {...this.props}/>
        <MenuNav routeId='contactus' icon='envelope-o' label='Contact us' {...this.props}/>
        <TouchableHighlight style={{padding: 5}}
          onPress={()=>{
            LoginManager.logOut();
            this.props.onLogout();
          }}>
          <Text style={styles.logOut}>
            <Icon name='sign-out' style={styles.icon}/>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Styles.COLOR_WHITE,
    padding: 20,
    borderRightWidth: 1,
    borderColor: Styles.COLOR_GREY,
  },
  logOut: {
    fontSize: Styles.FONT_SIZE_TITLE,
    color: Styles.FONT_COLOR,
    fontWeight: '500',
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_GREEN
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  }
});

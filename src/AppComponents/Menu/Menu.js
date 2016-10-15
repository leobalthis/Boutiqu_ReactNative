import React, { PropTypes } from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginManager } from 'react-native-fbsdk';

import { ProfilePhoto } from 'AppComponents';

import { MenuNav } from './MenuNav';
import { styles } from './styles';

export const Menu = (props) => (
  <View style={styles.wrapper}>
    <TouchableOpacity
      onPress={() => props.changeView('myprofile')}
    >
      <View style={styles.profileWrapper}>
        <ProfilePhoto source={props.user.propic} type="circle" size={60} border={false} />
        <View style={styles.profileTextWrapper}>
          <Text style={styles.profileTextUser}>{props.user.name}</Text>
          <Text style={styles.profileText}>My Profile</Text>
        </View>
      </View>
    </TouchableOpacity>
    <MenuNav
      onPress={() => props.changeView('home', { index: 0 })}
      label="Home"
      source={require('../../../assets/home_icon_green.png')}
    />
    <MenuNav
      onPress={() => props.changeView('discover', { index: 1 })}
      label="Discover"
      source={require('../../../assets/discover_icon_green.png')}
    />
    <MenuNav
      onPress={() => props.changeView('mylikes')}
      label="My Likes"
      source={require('../../../assets/heart_icon_green.png')}
    />
    <MenuNav
      onPress={() => props.changeView('search')}
      label="Search"
      source={require('../../../assets/search_icon_green.png')}
    />
    <MenuNav
      onPress={() => props.changeView('reviewcreator')}
      label="Post a review"
      source={require('../../../assets/post_icon_green.png')}
    />
    <MenuNav
      onPress={() => props.changeView('contactus')}
      label="Contact us"
      source={require('../../../assets/mail_icon_green.png')}
    />
    <MenuNav
      onPress={() => {
        LoginManager.logOut();
        props.onLogout();
      }}
      label="Log out"
      source={require('../../../assets/logout_icon_green.png')}
    />
  </View>
  );

Menu.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};

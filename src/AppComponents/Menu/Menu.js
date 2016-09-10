import React, { PropTypes } from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  View,
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
      onPress={() => props.changeView('myprofile')}>
      <View style={styles.profileWrapper}>
        <ProfilePhoto type="circle" size={60} border={false} />
        <View style={styles.profileTextWrapper}>
          <Text style={styles.profileTextUser}>Tina Azimi</Text>
          <Text style={styles.profileText}>My Profile</Text>
        </View>
      </View>
    </TouchableOpacity>
    <MenuNav routeId="home" icon="home" {...props} />
    <MenuNav routeId="discover" icon="bolt" {...props} />
    <MenuNav routeId="mylikes" icon="heart" label="My Likes" {...props} />
    <MenuNav routeId="postareview" icon="plus-circle" label="Post a review" {...props} />
    <MenuNav routeId="contactus" icon="envelope-o" label="Contact us" {...props} />
    <TouchableHighlight
      onPress={() => {
        LoginManager.logOut();
        props.onLogout();
      }}
    >
      <View style={styles.logoutWrapper}>
        <Text style={styles.logOut}>
          <Icon name="sign-out" style={styles.icon} />
          Logout
        </Text>
      </View>
    </TouchableHighlight>
  </View>
);

Menu.propTypes = {
  onLogout: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};

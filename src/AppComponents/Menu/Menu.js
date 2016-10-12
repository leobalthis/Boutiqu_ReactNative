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
    <MenuNav routeId="home" source="../../../assets/home_icon_green@1x.png" label="Home" {...props} data={{ index: 1 }} />
    <MenuNav routeId="discover" source="../../../assets/discover_icon_green@1x.png" label="Discover" {...props} data={{ index: 1 }} />
    <MenuNav routeId="mylikes" source="../../../assets/heart_icon_green@1x.png" label="My Likes" {...props} />
    <MenuNav routeId="search" source="../../../assets/search_icon_green@1x.png" label="Search" {...props} />
    <MenuNav routeId="reviewcreator" source="../../../assets/post_icon_green@1x.png" label="Post a review" {...props} />
    <MenuNav routeId="contactus" source="../../../assets/mail_icon_green@1x.png" label="Contact us" {...props} />
    <TouchableHighlight
      onPress={() => {
        LoginManager.logOut();
        props.onLogout();
      }}
    >
      <View style={styles.logoutWrapper}>
        <Image
          style={styles.image}
          source={require('../../../assets/home_icon_green@1x.png')}
        />
        <Text style={styles.logOut}>
          Log out
        </Text>
      </View>
    </TouchableHighlight>
  </View>
  );

Menu.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
};

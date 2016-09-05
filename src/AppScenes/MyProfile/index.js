import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { PImage, ProfileFollow, NavBarSideMenu } from 'AppComponents';
import { Styles } from 'AppStyles';
import { styles } from './styles';

export const MyProfile = (props) => (
  <View style={styles.wrapper}>
    <NavigationBar
      tintColor={Styles.COLOR_GREEN}
      title={{ title: 'My Profile' }}
      leftButton={ <NavBarSideMenu {...props} />}
    />
    <View style={styles.profileWrapper}>
      <View style={styles.proleft}>
        <PImage type="circle" size={90} border={false} />
        <Text style={styles.proleftText}>Spread the word about Boutiq!</Text>
      </View>
      <View style={styles.proRight}>
        <Text style={[styles.proRightText, styles.proRightTextName]}>Tina Azimi</Text>
        <Text style={[styles.proRightText, styles.proRightTextLocation]}>
        San Francisco, CA, United States
        </Text>
      <View>
        <Text style={[styles.proRightText, styles.proRightTextProfileType]}>Public Profile</Text>
      </View>
      <Text style={[styles.proRightText, styles.proRightTextProfileTypeInfo]}>
        when your profile is public, your reviews are displayed in the discover feed and otehr users can follow you.
      Be an influencer and spread the world about places you like and want to remeber!
      Your status posts will only be visible by your friends.
      </Text>
      </View>
    </View>
    <View style={styles.profileFollowers}>
      <ProfileFollow routeId="home" label="Friends" num="125" {...props} />
      <ProfileFollow routeId="home" label="Followers" num="40" {...props} />
      <ProfileFollow routeId="home" label="Following" num="36" {...props} />
      <ProfileFollow routeId="home" label="Reviews" num="28" {...props} />
    </View>
  </View>
);

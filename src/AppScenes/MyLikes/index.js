import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { PlaceCard, NavBarSideMenu } from 'AppComponents';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export const MyLikes = (props) => (
  <View style={styles.wrapper}>
    <NavigationBar
      tintColor={Styles.COLOR_GREEN}
      title={{ title: 'My Likes' }}
      leftButton={ <NavBarSideMenu {...props} /> }
    />
    <PlaceCard />
  </View>
);

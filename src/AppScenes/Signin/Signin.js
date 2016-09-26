import React, { PropTypes } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Styles } from 'AppStyles';
import {
  DiscoverSlide,
  TrustSlide,
  RememberSlide,
  SigninButton,
  Logo,
} from 'AppComponents';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: Styles.DEVICE_HEIGHT / 10,
    left: Styles.DEVICE_WIDTH / 2 - 88,
  },
  signinWrapper: {
    position: 'absolute',
    bottom: 70,
  },
});

export const Signin = ({ onLogin }) => (
  <View style={styles.wrapper}>
    <StatusBar barStyle="light-content" />
    <Swiper
      dot={
        <View style={{
          backgroundColor: 'rgba(255,255,255,.3)',
          width: 13,
          height: 13,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7
        }}
        />
      }
      activeDot={
        <View style={{
          backgroundColor: '#fff',
          width: 13,
          height: 13,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7
        }}
        />
      }
      paginationStyle={{
        bottom: 20
      }}
      loop={false}
    >
      <DiscoverSlide />
      <TrustSlide />
      <RememberSlide />
    </Swiper>
    <Logo style={styles.logo} />
    <SigninButton style={styles.signinWrapper} onLogin={onLogin} />
  </View>
);

Signin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

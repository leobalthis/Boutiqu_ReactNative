import React, { PropTypes } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import Swiper from 'react-native-swiper';
import { Auth } from 'AppServices';
import { Styles } from 'AppStyles';
import {
  DiscoverSlide,
  TrustSlide,
  RememberSlide,
  Logo,
} from 'AppComponents';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 80,
    left: Styles.DEVICE_WIDTH / 2 - 88,
  },
  signinWrapper: {
    position: 'absolute',
    bottom: 70,
    left: Styles.DEVICE_WIDTH / 2 - 90,
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
    <View style={styles.signinWrapper}>
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.warn('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.warn('login is cancelled.');
            } else {
              Auth.signin()
              .then(onLogin);
            }
          }
        }
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  </View>
);

Signin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

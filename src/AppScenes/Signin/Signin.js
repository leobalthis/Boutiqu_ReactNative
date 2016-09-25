import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { Auth } from 'AppServices';
import { Styles } from 'AppStyles';

/*
{
	accessToken: "",
	accessTokenSource: undefined,
	applicationID: "705458106266561",
	declinedPermissions: [],
	expirationTime: 1479462867324.065,
	lastRefreshTime: 1474278867326.837,
	permissions: ["email", "contact_email", "user_friends", "publish_actions", "public_profile"],
	userID: "10208175175324571"
}
*/
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slidesTitle: {
    color: Styles.COLOR_GREEN,
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: Styles.DEVICE_WIDTH - 80,
    marginBottom: 5,
    marginTop: Styles.DEVICE_HEIGHT / 2 - 40,
  },
  slidesLegend: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    width: Styles.DEVICE_WIDTH - 80,
    marginBottom: 5,
  },
  slidesParagraph: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'transparent',
    width: Styles.DEVICE_WIDTH - 150,
    marginTop: 25,
  },
});

export const Signin = ({ onLogin }) => (
  <View style={styles.wrapper}>
    <Image
      style={{
        padding: 40,
        resizeMode: 'contain',
      }}
      source={require('../../../assets/bg_signup1.jpg')}
    >
      <Text style={styles.slidesTitle}>
        Discover
      </Text>
      <Text style={styles.slidesLegend}>
        great places at home
      </Text>
      <Text style={styles.slidesLegend}>
        and when you travel
      </Text>
      <Text style={styles.slidesParagraph}>
        Boutiq helps you find the best spots in town or these hidden gems abroad
      </Text>
    </Image>
    <Image style={{
      position: 'absolute',
      top: 80,
      left: Styles.DEVICE_WIDTH/2 - 88,
    }}
      source={require('../../../assets/logo.png')}
    />
    <View style={{
      position: 'absolute',
      bottom: 50,
      left: Styles.DEVICE_WIDTH/2 - 90,
    }}>
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

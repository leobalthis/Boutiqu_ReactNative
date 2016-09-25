import React, { PropTypes } from 'react';
import {
	LoginButton,
	AccessToken,
} from 'react-native-fbsdk';
import { Auth } from 'AppServices';

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

export const Signin = ({ onLogin }) => (
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
    onLogoutFinished={() => console.log('logout.')}/>
);

Signin.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

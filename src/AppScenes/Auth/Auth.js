import React, { PropTypes } from 'react';

import {
	LoginButton,
	AccessToken,
} from 'react-native-fbsdk';

export const Auth = ({ onLogin }) => (
  <LoginButton
    publishPermissions={['publish_actions']}
    onLoginFinished={
      (error, result) => {
        if (error) {
          console.log('login has error: ' + result.error);
        } else if (result.isCancelled) {
          console.log('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken()
          .then(onLogin);
        }
      }
    }
    onLogoutFinished={() => console.log('logout.')}/>
);

Auth.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

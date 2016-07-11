import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
	LoginButton,
	AccessToken,
} from 'react-native-fbsdk';

export class Auth extends Component {
  static propTypes = {
    onLogin: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert('login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken()
              .then(this.props.onLogin);
            }
          }
        }
        onLogoutFinished={() => alert('logout.')}/>
    );
  }
}

const styles = StyleSheet.create({

});

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import FBSDK from 'react-native-fbsdk';
import {
	LoginButton,
	AccessToken,
	LoginManager
} from 'react-native-fbsdk';



export class Auth extends Component {
  render() {
    return (
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert('Yeeeeeeh, Welcome to Boutiq Travel :) ');

                  // alert(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
    );
  }
}

const styles = StyleSheet.create({

});

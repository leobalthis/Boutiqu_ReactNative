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

                  <Navigator
                    initialRoute={{name: 'My First Scene', index: 0}}
                    renderScene={(route, navigator) =>
                      <Main
                        name={route.name}
                        onForward={() => {
                          var nextIndex = route.index + 1;
                          navigator.push({
                            name: 'Scene ' + nextIndex,
                            index: nextIndex,
                          });
                        }}
                        onBack={() => {
                          if (route.index > 0) {
                            navigator.pop();
                          }
                        }}/>
                    }/>

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

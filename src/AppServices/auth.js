import CONFIG from '../../config';
import { AsyncStorage } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';
import { helpers } from './helpers';

export const Auth = {
  isSignedIn() {
    return AsyncStorage.getItem('user_id')
    .then(userId => !!userId);
  },
  signin() {
    return AccessToken.getCurrentAccessToken()
    .then(({ accessToken, userID }) => {
      const FACEBOOK_AUTH = JSON.stringify({
        token: accessToken,
        uid: userID
      });
      return fetch(`${CONFIG.BOUTIQ_API}/auth`, {
        headers: { FACEBOOK_AUTH }
      });
    }, (error) => {
      console.log("ERROR!!!", error);
    })
    .then(result => result.json())
    .then(data => {
      const keyValuePairs = helpers.objectToKeyValuesPairs(data, val => val.toString());
      return AsyncStorage.multiSet(keyValuePairs)
      .then(() => {
        const user = { id: data.user_id };
        return { success: true, payload: user };
      });
    })
    .catch(e => {
      console.error("debug", e);
    });
  },
  signout() {
    const keyValuePairs = helpers.objectToKeyValuesPairs({
      user_id: '',
      token: '',
      uid: '',
    }, val => val.toString());
    return AsyncStorage.multiSet(keyValuePairs);
  },
};

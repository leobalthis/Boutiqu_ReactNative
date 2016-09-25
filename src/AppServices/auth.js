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
    })
    .then(result => result.json())
    .then(data => {
      const keyValuePairs = helpers.objectToKeyValuesPairs(data, val => val.toString());
      AsyncStorage.multiSet(keyValuePairs);
      const user = { id: data.user_id };
      return { success: true, payload: user };
    });
  }
};

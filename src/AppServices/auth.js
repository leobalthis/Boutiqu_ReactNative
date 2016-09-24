import CONFIG from '../../config';
import { AsyncStorage } from 'react-native';
import { AccessToken } from 'react-native-fbsdk';
import helpers from './helpers';

export const Auth = {
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
      return { success: true, payload: null };
    });
  }
};

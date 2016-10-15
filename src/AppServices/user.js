import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { helpers } from './helpers';
import CONFIG from '../../config';

export const User = {
  set(payload) {
    const user = _.pick(payload, 'email', 'location', 'password', 'public', 'propic', 'image');
    return AsyncStorage.getItem('user_id')
    .then(userId => helpers
      .requestJSON(`${CONFIG.BOUTIQ_API}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({ user }),
      })
    );
  }
};

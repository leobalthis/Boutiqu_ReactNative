import { AsyncStorage } from 'react-native';
import CONFIG from '../../config';
import { helpers } from './helpers';

export const Boutiq = {
  getMyNetworkFeed(options = { page: 1 }) {
    const { page } = options;
    return AsyncStorage.getItem('user_id')
    .then(userId => helpers.request(`${CONFIG.BOUTIQ_API}/users/${userId}/feed?page=${page}`));
  },
  getDiscoverFeed() {
    return new Promise(res => {
      res(require('./fixtures/discover-data.json'));
    });
  }
};

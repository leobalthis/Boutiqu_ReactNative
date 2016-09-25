import { AsyncStorage } from 'react-native';
import CONFIG from '../../config';
import { helpers } from './helpers';

export const Boutiq = {
  getFeed(options = { page: 1 }, feedName) {
    const { page } = options;
    if (!feedName) {
      throw new Error('Missing feed name');
    }
    return AsyncStorage.getItem('user_id')
    .then(userId => helpers
      .request(`${CONFIG.BOUTIQ_API}/users/${userId}/${feedName}?page=${page}`)
    );
  },
  getMyNetworkFeed(options) {
    return this.getFeed(options, 'feed');
  },
  getDiscoverFeed(options) {
    return this.getFeed(options, 'discover');
  },
};

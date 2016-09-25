import { AsyncStorage } from 'react-native';
import { helpers } from './helpers';
import CONFIG from '../../config';

export const Boutiq = {
  getPlaces(params, feedName) {
    if (!feedName) {
      throw new Error('Missing feed name');
    }
    const query = Object.keys(params).reduce((memo, key) => {
      if (params[key] === null) {
        return memo;
      }
      let res = memo;
      if (memo.length !== 0) {
        res = `${memo}&`;
      }
      return `${res}${key}=${params[key]}`;
    }, '');
    return AsyncStorage.getItem('user_id')
    .then(userId => helpers
      .request(`${CONFIG.BOUTIQ_API}/users/${userId}/${feedName}?${query}`)
    );
  },
  getMyNetworkFeed(params = { page: 1 }) {
    return this.getPlaces(params, 'feed');
  },
  getDiscoverFeed(params = { page: 1 }) {
    return this.getPlaces(params, 'discover');
  },
  getLikes(params = { page: 1, q: null }) {
    // q: To filter by "Eat", "Drink", "Sleep", "Do"
    return this.getPlaces(params, 'likes');
  },
};

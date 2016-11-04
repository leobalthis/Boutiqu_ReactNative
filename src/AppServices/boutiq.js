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
    // return this.getPlaces(params, 'feed');
    return new Promise(res => res(require('./fixtures/placeCard.json')));
  },
  getUserProfile(params = { page: 1 }) {
    return new Promise(res => res(require('./fixtures/userProfile.json')));
  },
  getDiscoverFeed(params = { page: 1 }) {
    // return this.getPlaces(params, 'discover');
    return new Promise(res => res(require('./fixtures/discover-data.json')));
  },
  getLikes(params = { page: 1, q: null }) {
    // q: To filter by tag "Eat", "Drink", "Sleep", "Do"
    // return this.getPlaces(params, 'likes');
    return new Promise(res => res(require('./fixtures/userProfile.json')));
  },
  getPlaceReviews(params) {
    const { placeId, page, extra } = params;
    if (!placeId) {
      throw new Error('Missing place id');
    }
    return helpers.request(`${CONFIG.BOUTIQ_API}/places/${placeId}${extra}?page=${page}`);
  },
  getPlaceReviewsByMyNetwork(params = { page: 1, placeId: null }) {
    return this.getPlaceReviews(Object.assign({
      extra: '',
      page: 1,
    }, params));
  },
  getPlaceReviewsByOthers(params = { page: 1, placeId: null }) {
    return this.getPlaceReviews(Object.assign({
      extra: '/other_reviews',
      page: 1,
    }, params));
  }
};

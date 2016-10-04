import { APP_PLACE } from 'AppComponents';
import { userProfile } from '../fixtures/userProfile';

export const api = {
  getPlaceDetails(placeId) {
    return new Promise((res) => {
      // setTimeout(() => res(APP_PLACE), 1500);
      res(APP_PLACE);
    });
    // const url = `https://boutiq-travel.herokuapp.com/api/v1/places/${placeId}`;
    // return fetch(url).then(res => res.json());
  },
  getUserDetails(userId) {
    return new Promise((res) => {
      res(userProfile);
    });
  }
};

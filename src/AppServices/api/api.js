import { APP_PLACE } from 'AppComponents';

export const api = {
  getPlaceDetails(placeId) {
    return new Promise((res) => {
      // setTimeout(() => res(APP_PLACE), 1500);
      res(APP_PLACE);
    });
    // const url = `https://boutiq-travel.herokuapp.com/api/v1/places/${placeId}`;
    // return fetch(url).then(res => res.json());
  },
};

// api.getPlaceDetails(12).then(data => {
//
//});

import _ from 'lodash';

export default {
  objectToKeyValuesPairs(data, process = _.noop) {
    return Object.keys(data).map(key => [key, process(data[key])]);
  },
  keyValuePairsToObject(data) {
    return data.reduce((memo, d) => Object.assign(memo, { [d[0]]: d[1] })
    , {});
  }
};

//
//
// const request = (url, options = {}) => AccessToken.getCurrentAccessToken()
//   .then(({ accessToken, userID }) => {
//     const FACEBOOK_AUTH = JSON.stringify({
//       token: accessToken,
//       uid: userID
//     });
//     const headers = Object.assign(options.headers || {}, { FACEBOOK_AUTH });
//     return fetch(url, Object.assign(options, { headers }));
//   })
//   .then(result => result.json());
//
// // return request(`${CONFIG.BOUTIQ_API}/auth`, { method: 'GET' })
// // .then(data => {
// //   const keyValuePairs = helpers.objectToKeyValuesPairs(data, val => val.toString());
// //   AsyncStorage.multiSet(keyValuePairs);
// //   return { success: true, payload: null };
// // });

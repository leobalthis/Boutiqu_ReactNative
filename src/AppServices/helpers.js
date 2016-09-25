import { AsyncStorage } from 'react-native';
import _ from 'lodash';

export const helpers = {
  objectToKeyValuesPairs(data, process = _.noop) {
    return Object.keys(data).map(key => [key, process(data[key])]);
  },
  keyValuePairsToObject(data) {
    return data.reduce((memo, d) => Object.assign(memo, { [d[0]]: d[1] })
    , {});
  },
  request(url, options = {}) {
    return AsyncStorage.multiGet(['token', 'uid'])
    .then(keyValueArray => {
      const data = this.keyValuePairsToObject(keyValueArray);
      const FACEBOOK_AUTH = JSON.stringify(data);
      const headers = Object.assign(options.headers || {}, { FACEBOOK_AUTH });
      return fetch(url, Object.assign(options, { headers }));
    })
    .then(result => result.json());
  },
  requestJSON(url, options = {}) {
    const headers = Object.assign(options.headers || {}, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    return this.request(url, Object.assign(options, { headers }));
  }
};

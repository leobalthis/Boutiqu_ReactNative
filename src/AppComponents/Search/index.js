import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Styles, x } from 'AppStyles';
import settings from '../../../settings.json';

// const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export const Search = ({ placeholder, getPlace }) => (
  <View style={styles.wrapper}>
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      autoFocus={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        getPlace(data, details)
      }}
      // onPress={(data, details = null) => {
      // }}
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: settings.GOOGLE_PLACES_KEY,
        language: 'en',
        types: '(cities)', // default: 'geocode'
      }}
      styles={{
        textInputContainer: {
          marginBottom: 30,
          width: x,
          backgroundColor: Styles.COLOR_GREEN,
          height: 60,
          alignItems: 'center',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          alignSelf: 'center',
          backgroundColor: Styles.COLOR_WHITE,
          fontSize: 20,
          height: 40,
          width: x - 45,
          color: Styles.COLOR_DARKER_45,
        },
      }}
      currentLocation={false}
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch"
      GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        rankby: 'distance',
        types: 'food',
      }}
      enablePoweredByContainer={false}
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
      predefinedPlacesAlwaysVisible={false}
    />
  </View>
);

Search.propTypes = {
  placeholder: PropTypes.string,
  getPlace: PropTypes.func
};

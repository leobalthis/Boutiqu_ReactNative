import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import config from '../../config';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';



const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export class Search extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
			<GooglePlacesAutocomplete
				placeholder='Search'
				minLength={2} // minimum length of text to search
				autoFocus={false}
				fetchDetails={true}
				onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
					console.log(data);
					console.log(details);
				}}
				getDefaultValue={() => {
					return ''; // text input default value
				}}
				query={{
					// available options: https://developers.google.com/places/web-service/autocomplete
					key: config.GOOGLE_PLACES_KEY,
					language: 'en', // language of the results
					types: '(cities)', // default: 'geocode'
				}}
				styles={{
					textInputContainer: {
						backgroundColor: Styles.COLOR_GREEN,
						height: 40,
						borderTopWidth: 0,
						borderBottomWidth: 0,
					},
					textInput: {
						backgroundColor: Styles.COLOR_WHITE,
						fontSize: 15,
						color: Styles.COLOR_DARKER_15
					},
				}}

				currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
				currentLocationLabel="Current location"
				nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
				GoogleReverseGeocodingQuery={{
					// available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
				}}
				GooglePlacesSearchQuery={{
					// available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
					rankby: 'distance',
					types: 'food',
				}}

				enablePoweredByContainer={false}

				filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities


				predefinedPlacesAlwaysVisible={false}/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#FFF',
	},
});

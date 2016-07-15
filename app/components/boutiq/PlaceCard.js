import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

export const PlaceCard = () => {

	return (
      <Image
        source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'}}
        style={styles.container}>
        <Text style={styles.welcome}>
          My favourite rooftop in NYC to enjoy a good cocktail with nice crowds and a killer view.
        </Text>
      </Image>
	);
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
		width: undefined,
		height: 200,
		backgroundColor:'transparent',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.5,
	},
	welcome: {
		fontSize: 20,
		color: '#fff',
		textAlign: 'center',
		margin: 10,
	}
});

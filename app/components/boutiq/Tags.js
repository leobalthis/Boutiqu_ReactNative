import React, { Component } from 'react';

import Styles from './Styles';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export const Tags = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.tags}>Eat</Text>
			<Text style={styles.tags}>Drink</Text>
			<Text style={styles.tags}>Sleep</Text>
			<Text style={styles.tags}>Do</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		top: 120,
		right: 20,
	},
	tags: {
		backgroundColor: Styles.COLOR_GREEN,
		color: Styles.COLOR_WHITE,
		width: 55,
		paddingTop: 1,
		paddingBottom: 1,
		paddingRight: 5,
		paddingLeft: 5,
		marginLeft: 3,
		marginRight:3,
		fontSize: 13,
        textAlign: 'center'
	}
});

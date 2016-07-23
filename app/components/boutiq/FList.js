import React, { Component } from 'react';

import { FListItem } from './FListItem';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

export const FList = () => {

	state = {
		text: '',
	}

	return (
		<View>
			<FListItem name='Tina Azimi' follow={true}/>
			<FListItem name='Tina Azimi' follow={false}/>
		</View>
	);
}

const styles = StyleSheet.create({

});
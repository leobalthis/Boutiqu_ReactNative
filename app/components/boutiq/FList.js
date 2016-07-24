import React, { Component } from 'react';

import { FListItem } from './FListItem';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

export const FList = () => {

	return (
		<View>
			<FListItem name='Tina Azimi' follow='yes'/>
			<FListItem name='Alex Girard'/>
			<FListItem name='Greg Villain' follow='yes'/>
		</View>
	);
}

const styles = StyleSheet.create({

});
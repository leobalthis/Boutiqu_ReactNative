import React, { Component } from 'react';

import { PImage } from './PImage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';

export const PostStatus = () => {

	state = {
		text: '',
	}

	return (
			<View style={styles.wrapperPostStatus}>
            	<PImage type='circle' size={40}/>
				<TextInput style={styles.textInput}
				onChangeText={(text) => this.setState({text})}
				placeholder='Post a status'
				value={this.state.text}/>
				<Icon name='pencil-square-o' style={styles.postIcon}/>
			</View>
	);
}

const styles = StyleSheet.create({
	wrapperPostStatus: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Styles.COLOR_WHITE,
		padding: 10,
	},
	postIcon: {
		fontSize: 30,
		padding: 5,
		color: Styles.COLOR_DARKER_15
	},
	textInput: {
		width: Styles.CARD_WIDTH - Styles.CARD_PADDING_X - 50,
		height: 40,
		padding: 8,
		fontSize: Styles.FONT_SIZE_SMALLER,
		color: Styles.COLOR_DARKER_15,
		borderColor: Styles.COLOR_DARKER_15,
		borderWidth: 1,
	}
});
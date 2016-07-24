import React, { Component } from 'react';

import { PImage } from './PImage';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
export class PlaceCardProfileName extends Component {

	state = {
		follow: this.props.follow,
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<PImage type='circle' size={40} border={false}/>
				<View style={styles.wrapperProfileName}>
				<Text style={styles.wrapperName}>{this.props.name}</Text>
				<Text style={styles.wrapperTime}>5 hours ago</Text>
				</View>
				<TouchableHighlight>
				  <View>
				    <Text  style={styles.wrapperY}>
				    	{(this.state.follow) ? 'Following' : 'Follow'}
				    </Text>
				  </View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: Styles.COLOR_WHITE,
		padding: 5,	
        alignItems:'center',
	},
	wrapperProfileName: {
		width: 200,
	},
	wrapperY: {
		color: Styles.COLOR_DARKER_15,
		width: 100,
		fontSize: 12,
        textAlign: 'center'
	},
	wrapperName: {
        color: Styles.FONT_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
	},
	wrapperTime: {
		color: Styles.FONT_COLOR,
		fontSize: 10,
	}
});
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { PImage } from './PImage';

import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';

export class Footer extends Component {
	state = {
		text: '',
	}
	
	render() {
		return (
			<View>
				<View style={styles.wrapperTop}>
				</View>
				<View style={styles.wrapper}>
					<View style={styles.wrapperG}>
						<Icon name='home' style={styles.icon}/>
						<Icon name='search' style={styles.icon}/>
					</View>				
					<View style={styles.wrapperG}>
						<Icon name='plus-circle' style={styles.plusIcon}/>
					</View>				
					<View style={styles.wrapperG}>
						<Icon name='bolt' style={styles.icon}/>
			        	<PImage type='circle' size={30} border={true} />
					</View>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapperTop: {
		height: 30,
		backgroundColor: Styles.COLOR_LIGHTER_5,
	},
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: Styles.COLOR_WHITE,
		padding: 5,
		borderColor: Styles.COLOR_LIGHTER_5,
		borderWidth: 1,
        alignItems:'center',
	},
	wrapperG: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderColor: Styles.COLOR_LIGHTER_5,
		borderWidth: 0,
	},	
	wrapperB: {
		justifyContent: 'space-around',
	},
	icon: {
		fontSize: 20,
		color: Styles.COLOR_DARKER_30,
	},
	plusIcon: {
		fontSize: 70,
		color: Styles.COLOR_PINK,
		backgroundColor:'transparent',
		position: 'absolute',
		top: -55,
		left: 20,
	}
});
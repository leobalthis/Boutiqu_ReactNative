import React, { Component } from 'react';

import { PImage } from './PImage';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
export class FListItem extends Component {

	state = {
		isLoading: true,
		bg: '#f00',
		following: 'follow'
	}

	componentWillMount() {
	  let newstate = {}

	  if(this.props.follow) {
	    newstate.bg = '#ccc';
	    newstate.following = 'following';
	  }

	  this.setState(newstate)
	}

	toggleWeight() {
		let newstate = {}

		if(this.state.following == 'f') {
			newstate.bg = '#000';
			newstate.following = 'n';
		}

	  this.setState(newstate)
	}

	render() {
		return (
				<View style={styles.wrapper}>
	            	<PImage type='circle' size={40} border={false}/>
					<Text>{this.props.name}</Text>
				    <TouchableHighlight>
				      <View  style={{borderColor: this.state.bg}} style={styles.wrapperF} onPress={this.toggleWeight}>
				        <Text style={styles.btnF} >
				        	{this.state.following}
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
		borderBottomColor: Styles.COLOR_LIGHTER_5,
		borderBottomWidth: 1,		
        alignItems:'center',
	},
	wrapperF: {
		borderColor: Styles.COLOR_LIGHTER_5,
		borderWidth: 1,
		width: 130,
		padding: 5,
        alignItems:'center',
	},
	btnF: {
		textAlign: 'left',
	}
});
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
		follow: true,
	}

	render() {
		return (
				<View style={styles.wrapper}>
	            	<PImage type='circle' size={40} border={false}/>
					<Text style={styles.wrapperName}>{this.props.name}</Text>
				    <TouchableHighlight>
				      <View style={styles.wrapperF}>
				        <Text onPress={()=>{
						this.setState({follow: !(this.state.follow)});
						}} 
						style={(this.state.follow) ? styles.wrapperY : styles.wrapperN} >
				        	{(this.props.follow === 'yes') ? 'Following' : 'Follow'}
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
	wrapperName: {
        textAlign: 'left'
	},
	wrapperY: {
		backgroundColor: Styles.COLOR_PINK,
		color: Styles.COLOR_WHITE,
		width: 130,
		padding: 5,
        textAlign: 'center'
	},	
	wrapperN: {
		borderColor: Styles.COLOR_PINK,
		color: Styles.COLOR_PINK,
		borderWidth: 1,
		width: 130,
		padding: 5,
        textAlign: 'center'
	},
	btnF: {
		textAlign: 'left',
	}
});
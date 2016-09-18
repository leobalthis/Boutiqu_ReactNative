import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import { ProfilePhoto } from 'AppComponents';
import { Styles } from 'AppStyles';

export class Footer extends Component {
  static propTypes = {
		changeView: PropTypes.func.isRequired,
	}
	constructor(props) {
	  super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.wrapperTop}>
				</View>
				<View style={styles.wrapper}>
					<View style={styles.wrapperG}>
					<TouchableOpacity
					onPress={() => this.props.changeView('home', { index: 0 })}>
						<Icon name='home' style={styles.icon}/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.props.changeView('search')}
					>
						<Icon name='search' style={styles.icon}/>
					</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.wrapperG}
						onPress={() => this.props.changeView('reviewcreator')}>
						<Icon name='plus-circle' style={styles.plusIcon}/>
					</TouchableOpacity>
					<View style={styles.wrapperG}>
						<TouchableOpacity
						onPress={() => this.props.changeView('home', { index: 1 })}>
							<Icon name='bolt' style={styles.icon}/>
						</TouchableOpacity>
					<TouchableOpacity
					onPress={() => this.props.changeView('myprofile')}>
			        	<ProfilePhoto type='circle' size={30} border={true} />
					</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	},
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
		paddingLeft: 10,
		paddingRight: 10,
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

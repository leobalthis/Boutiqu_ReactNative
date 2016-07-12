import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBarSideMenu = props => (
	<TouchableHighlight
		onPress={props.openMenu}
		style={{
			justifyContent: 'center',
			padding: 10,
		}}>
    	<Icon name='bars' style={styles.icon} />
	</TouchableHighlight>
)

NavBarSideMenu.propTypes = {
	openMenu: React.PropTypes.func.isRequired,
};

export class MyProfile extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<NavigationBar tintColor={Styles.COLOR_GREEN}
					title={{title: 'My Profile'}}
					leftButton={<NavBarSideMenu {...this.props}/>} />

					<View style={styles.profileWrapper}>
					 <View style={styles.proleft}>
							<Image style={styles.userImg} source={{uri: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12631288_10201227918496779_8726692479317881707_n.jpg?oh=51984222db7b99543e0b811d2178df53&oe=5834F070'}} />
							<Text style={styles.proleftText}>Spread the word about Boutiq!</Text>
						</View>

					<View style={styles.proRight}>
						<Text style={[styles.proRightText, styles.proRightTextName]}>Tina Azimi</Text>
						<Text style={[styles.proRightText, styles.proRightTextLocation]}>
							San Francisco, CA, United States
						</Text>
						<View>
							<Text style={[styles.proRightText, styles.proRightTextProfileType]}>Public Profile</Text>
						</View>
						<Text style={[styles.proRightText, styles.proRightTextProfileTypeInfo]}>
							when your profile is public, your reviews are displayed in the discover feed and otehr users can follow you.
							Be an influencer and spread the world about places you like and want to remeber!
							Your status posts will only be visible by your friends. 
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
    	backgroundColor: Styles.COLOR_WHITE,
	},
	icon: {
		fontSize: 20,
		color: Styles.COLOR_WHITE
	},
	profileWrapper: {
		flex: 1,
		flexDirection:'row',
		marginTop: 10,
		padding:10,
	},
	proleft: {
		width: 100,
		alignItems:'center',
	},
	proleftText: {
		fontSize: 12,
		color: Styles.COLOR_DARKER_45,
		textAlign: 'center',
		marginTop: 14,
	},
	userImg: {
		width: 90,
		height: 90,
		borderRadius: 45,
	},
	proRight: {
		flex: 1,
		padding: 10,
	},
	proRightText: {
		color: Styles.COLOR_DARKER_60,
		fontSize: 14,
	},
	proRightTextName: {
		fontSize: 22,
		fontWeight: 'bold',
	},
	proRightTextLocation: {
		color: Styles.COLOR_DARKER_30,
	},
	proRightTextProfileType: {
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
		color: Styles.COLOR_DARKER_45,
	},
	proRightTextProfileTypeInfo: {
		color: Styles.COLOR_DARKER_45,
		fontSize: 10,
		textAlign: 'justify',
	}
});

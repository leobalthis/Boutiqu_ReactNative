import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { PostStatus } from './PostStatus';
import { PlaceCard } from './PlaceCard';
import { LastReviewsPImage } from './LastReviewsPImage';
import { Search } from './Search';
import { Footer } from './Footer';
import { FList } from './FList';
import Styles from './Styles';

import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableHighlight,
} from 'react-native';

const NavBarSideMenu = props => (
	<TouchableHighlight
		onPress={props.openMenu}
		style={{
			justifyContent: 'center',
			padding: 10,
			backgroundColor: Styles.COLOR_GREEN,
		}}>
		<Icon name='bars' style={styles.icon} />
	</TouchableHighlight>
)

NavBarSideMenu.propTypes = {
	openMenu: React.PropTypes.func.isRequired,
};

export class Home extends Component {

	state = {
		text: '',
	}

	render() {
		return (
			<View>
				<View style={styles.wrapper}>
					<NavigationBar tintColor={Styles.COLOR_GREEN}
						title={{title: 'Boutiq'}}
						leftButton={<NavBarSideMenu {...this.props}/>} />
					<View>
						<Search/>
					</View>
					<ScrollableTabView style={styles.tabs}>
						<View tabLabel='My Network' style={styles.tabsContent}>
							<PostStatus/>
						</View>
						<View tabLabel='Discover' style={styles.tabsContent}>
							<Text>Discover</Text>
						</View>
					</ScrollableTabView>
				</View>
				<View>
					<PlaceCard/>
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
	tabs: {
		backgroundColor: Styles.COLOR_GREEN,
	},
	tabsContent: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: Styles.COLOR_WHITE,
		padding: 10,
	},
});

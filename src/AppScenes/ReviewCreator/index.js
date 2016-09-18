import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
	ProfilePhoto,
	ProfileFollow,
	NavBarClose,
	Tags,
	Rate,
	SocialMediaShare,
	WriteReview,
} from 'AppComponents';

import { Styles } from 'AppStyles';
import { styles } from './styles';

export class ReviewCreator extends Component {

	constructor(props) {

	  super(props);

	  this.tagSelection = null;

	}

	render() {
		const { onClose } = this.props;
		return (
			<View style={styles.wrapper}>
				<NavigationBar
					tintColor={Styles.COLOR_GREEN}
					title={{ title: 'Create A Review' }}
					leftButton={{
						title: "Close",
						handler: onClose,
				}}/>
				<Text style={styles.reviewLabel}>YOUR REVIEW</Text>
				<ScrollView style={{
					flex: 1,
				    flexDirection: 'column',
				}}>
				<Tags ref={e => this.tagSelection = e} tagsLabel={true}  />
				<Rate rateLabel={true} />
				<WriteReview />
				<TouchableOpacity onPress={() => {
					console.log('t', this.tagSelection.getSelectedTags());
				}}>
				</TouchableOpacity>
				<SocialMediaShare />
				</ScrollView>
				<Text style={styles.postBtn}>POST YOUR REVIEW NOW</Text>
			</View>
		);
	}
}

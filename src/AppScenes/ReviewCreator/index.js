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
	Footer,
	Tags,
	Rate,
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
					}}
		    />
				<View style={{
					flex: 1,
				    flexDirection: 'column',
				}}>
				<Tags ref={e => this.tagSelection = e} label={true} />
				<Rate label='Your rating' />
				<WriteReview />
				<TouchableOpacity onPress={() => {
					console.log('t', this.tagSelection.getSelectedTags());
				}}>
				<Text style={styles.postBtn}>POST YOUR REVIEW NOW</Text>
				</TouchableOpacity>
				</View>
		  </View>
		);
	}
}

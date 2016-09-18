import React, { PropTypes } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import {
	ProfilePhoto,
	ProfileFollow,
} from 'AppComponents';
import { Styles } from 'AppStyles';
import { styles } from './styles';

export const MyProfile = (props) => (
  <View style={styles.wrapper}>
		<ScrollView style={{ backgroundColor: '#ddd' }}>
			<View style={{ backgroundColor: '#fff' }}>
				<View style={styles.profileWrapper}>
					<View style={styles.proleft}>
						<ProfilePhoto type="circle" size={90} border={false} />
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
				<View style={styles.profileFollowers}>
				<TouchableOpacity
				onPress={() => props.navigator.push({
					id: 'reviewcreator'
				})}>
					<ProfileFollow routeId="home" label="Friends" num="125" {...props} />
				</TouchableOpacity>
					<ProfileFollow routeId="home" label="Followers" num="40" {...props} />
					<ProfileFollow routeId="home" label="Following" num="36" {...props} />
					<ProfileFollow routeId="home" label="Reviews" num="28" {...props} />
				</View>
			</View>
		</ScrollView>
  </View>
);

MyProfile.propTypes = {
  navigator: PropTypes.object.isRequired,
};

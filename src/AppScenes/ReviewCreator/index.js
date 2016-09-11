import React from 'react';
import {
	View,
	Text,
	ScrollView,
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

export const ReviewCreator = ({ onClose }) => (
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
		<Tags label={true} />
		<Rate label={true} />
		<WriteReview />
		</View>
  </View>
);

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
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'red',
		}}>
		<Text>REVIEW CREATOR PAGE</Text>
		</View>
  </View>
);

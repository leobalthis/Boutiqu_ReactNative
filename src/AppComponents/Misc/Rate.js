import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    fontSize: 15,
    color: Styles.COLOR_WHITE,
  },
  rateN: {
    marginLeft: 5,
    color: Styles.COLOR_WHITE,
  },
});

export const Rate = () => (
	<View style={styles.wrapper}>
		<Icon name="star" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Text style={styles.rateN}>(3000)</Text>
	</View>
);

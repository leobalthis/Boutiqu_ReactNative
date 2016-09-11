import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  tags: {
    backgroundColor: Styles.COLOR_GREEN,
    color: Styles.COLOR_WHITE,
    width: 55,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 13,
    textAlign: 'center'
  }
});

export const Tags = () => (
	<View style={styles.wrapper}>
        <Text>Tags</Text>
		<Text style={styles.tags}>Eat</Text>
		<Text style={styles.tags}>Drink</Text>
		<Text style={styles.tags}>Sleep</Text>
		<Text style={styles.tags}>Do</Text>
	</View>
);

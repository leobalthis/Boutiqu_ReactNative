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
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  icon: {
    fontSize: 15,
  },
  rateN: {
    marginLeft: 5,
  },
});

const labelText = ({ label }) => {
  let text;
  if (label) {
    text = <Text>{label}</Text>;
  } else {
    text = null;
  }
  return text;
};

export const Rate = ({ label }) => (
	<View style={styles.wrapper}>
    {labelText({ label })}
		<Icon name="star" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
		<Icon name="star-o" style={styles.icon} />
	</View>
);

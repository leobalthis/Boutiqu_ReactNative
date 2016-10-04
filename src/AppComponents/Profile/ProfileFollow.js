import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  profileF: {
    // backgroundColor: 'blue',
    // justifyContent: 'space-between',
    // padding: 10,
    // paddingRight: 15,
    // paddingLeft: 15,
    // borderRightWidth: 1,
    // borderColor: Styles.COLOR_DARKER_15,
  },
  profileFNum: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Styles.COLOR_DARKER_45,
  },
  profileFLabel: {
    fontSize: 14,
    color: Styles.COLOR_DARKER_45,
  },
});

export const ProfileFollow = ({ label, num }) => (
	<View style={styles.profileF}>
		<Text style={styles.profileFNum}>{num}</Text>
		<Text style={styles.profileFLabel}>{label}</Text>
	</View>
);

ProfileFollow.propTypes = {
  label: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  tags: {
    backgroundColor: Styles.COLOR_GREEN,
    width: 55,
    height: 15,
    marginLeft: 5,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: Styles.COLOR_WHITE,
    fontSize: 12
  }
});

const renderTags = (tags) => tags.map((tag, index) => (
	<View key={index} style={styles.tags}>
		<Text style={styles.tagText}>{tag}</Text>
	</View>
));

export const TagsView = ({ tags }) => (
	<View style={{ flexDirection: 'row' }}>{renderTags(tags)}</View>
);

TagsView.propTypes = {
  tags: PropTypes.array.isRequired,
};

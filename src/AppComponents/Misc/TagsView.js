import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // flexDirection: 'row',
    // position: 'absolute',
    // top: 120,
    // right: 20,
  },
  tags: {
    backgroundColor: Styles.COLOR_GREEN,
    width: 55,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const renderTagsView = (tags) => {
  // const tagsMap = tags.map((tag, index) => {
  //   return (
  //     <View key={index} style={styles.tags}>
  //       <Text style={{ color: 'white' }}>{tag}</Text>
  //     </View>
  //   );
  // });
	// return (
	// 	<View>
	//   	{tagsMap}
	//   </View>
	// )
};

const renderTags = (tags) => tags.map((tag, index) => (
	<View key={index} style={styles.tags}>
		<Text style={{ color: 'white' }}>{tag}</Text>
	</View>
));

export const TagsView = ({ tags }) => (
	<View>{renderTags(tags)}</View>
);

TagsView.propTypes = {
  tags: PropTypes.array.isRequired,
};

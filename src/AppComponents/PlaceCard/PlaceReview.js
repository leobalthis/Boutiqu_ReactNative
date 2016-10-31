import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { api } from 'AppServices';
import { ProfileName } from './ProfileName';
import { PlaceReviewComments } from './PlaceReviewComments';
import { Styles } from 'AppStyles';


const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    backgroundColor: Styles.COLOR_WHITE,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
  },
  postReviewText: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.FONT_COLOR,
    padding: 5,
  }
});

const handlePress = (navigator, props, placeId) => {
	// this.setState({
	// 	isloading: true
	// });
	api.getPlaceDetails(25)
	.then(res => {
		// if (res.error) {
		// 	this.setState({
		// 		error: 'place not found',
		// 		isLoading: false
		// 	})
		// }
		// else {
			navigator.push({
				id: 'placedetails',
				passprops: { placeDetails: res }
			});
		// }
	});
};

const renderTextReview = text => {
  let textToRender;
  text.length > 60
  ? textToRender = text.slice(0, 60) + '  ... more'
  : textToRender = text;
  return textToRender;
};

const goToReviewUserProfile = (navigator, props) => {
  navigator.push({
    id: 'memberprofile',
    data: { data: props }
  });
};

export const PlaceReview = ({ navigator, ...props }) => (
	<View style={styles.wrapper}>
    <View>
      <TouchableOpacity onPress={() => goToReviewUserProfile(navigator, props)}>
        <ProfileName {...props} follow={false} />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 15, marginBottom: 10 }}>
        <Text style={styles.postReviewText}>
          {renderTextReview(props.text)}
        </Text>
      </View>
    </View>
		<TouchableOpacity onPress={() => handlePress(navigator, props)}>
      <Image
        source={{ uri: props.place.photo }}
        style={styles.container}
      />
		</TouchableOpacity>
		<PlaceReviewComments {...props} />
	</View>
);

PlaceReview.propTypes = {
  navigator: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
};

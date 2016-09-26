import React, { PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Rate, Tags } from 'AppComponents';
import { api } from 'AppServices';
import { ProfileName } from './ProfileName';
import { PlaceCardComments } from './PlaceCardComments';
import { Styles } from 'AppStyles';


const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
    backgroundColor: Styles.COLOR_WHITE,
    borderColor: 'red',
    borderWidth: 1,
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

const handlePress = (navigator, placeId) => {
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

export const PlaceCard = (props) => (
	<View style={styles.wrapper} >
		<ProfileName {...props} follow={false} />
			<View>
				<Text style={styles.postReviewText}>
				{props.text}
				</Text>
			</View>
		<TouchableOpacity onPress={() => handlePress(props.navigator)}>
			<View>
				<Image
					source={{ uri: props.place.photo }}
					style={styles.container}
				>
				</Image>
			</View>
		</TouchableOpacity>
		<PlaceCardComments {...props} />
	</View>
);

PlaceCard.propTypes = {
  navigator: PropTypes.object.isRequired
};

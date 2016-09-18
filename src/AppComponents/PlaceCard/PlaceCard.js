import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import { ProfileName } from './ProfileName';
import { Styles } from 'AppStyles';


const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
  },
  postReviewText: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.FONT_COLOR,
    padding: 5,
  }
});

export const PlaceCard = () => (
  <View style={styles.wrapper} >
    <ProfileName 
      name="Tina Azimi"
      placeName="La Note Restaurant Provenca"
      local="Berkeley, CA"
      follow={false} />
      <View>
        <Text style={styles.postReviewText}>
          My favourite rooftop in NYC to enjoy a good cocktail with nice crowds and a killer view.
        </Text>
      </View>
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: 'https://c1.staticflickr.com/9/8731/16524153093_2933c1ede4_b.jpg' }}
          style={styles.container}>
        </Image>
      </View>
    </TouchableOpacity>
  </View>
);

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from 'react-native';
import { Rate, Tags } from 'AppComponents';
import { ProfileName } from './ProfileName';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
  },
  placeName: {
    fontSize: 20,
    color: '#fff',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  placeP: {
    fontSize: 14,
    color: '#fff',
    position: 'absolute',
    top: 35,
    left: 20,
  },
  welcome: {
    fontSize: 15,
    color: '#fff',
    width: 320,
    top: 70,
    left: 20,
  }
});

export const PlaceCard = () => (
  <View>
    <ProfileName name="Tina Azimi" follow={true} />
    <TouchableHighlight>
      <View>
        <Tags tagsLabel={false} />
        <Rate rateLabel={false} />
        <Image
          source={{ uri: 'https://c1.staticflickr.com/9/8731/16524153093_2933c1ede4_b.jpg' }}
          style={styles.container}
        >
          <Text style={styles.placeName}>
            Mrs Slippy
          </Text>
          <Text style={styles.placeP}>
            Double Bay, Australia
          </Text>
          <Text style={styles.welcome}>
            My favourite rooftop in NYC to enjoy a good cocktail with nice crowds and a killer view.
          </Text>
        </Image>
      </View>
    </TouchableHighlight>
  </View>
);

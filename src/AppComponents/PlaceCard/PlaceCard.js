import React from 'react';
import _ from 'lodash';

import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
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

export const PlaceCard = (props) => {

  return (
    <View style={styles.wrapper} >
      <ProfileName {...props}
        follow={false} />    
        <View>
          <Text style={styles.postReviewText}>
          {props.text}
          </Text>
        </View>
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: props.place.photo }}
            style={styles.container}>
          </Image>
        </View>
      </TouchableOpacity>
      <PlaceCardComments
        {...props}/>
    </View>
  );
};

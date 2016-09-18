import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { PlaceCard } from 'AppComponents';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export const MyLikes = (props) => (
  <View style={styles.wrapper}>
    <PlaceCard />
  </View>
);

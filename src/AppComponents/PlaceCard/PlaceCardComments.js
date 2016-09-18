import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: 1, 
  },
});

export class PlaceCardComments extends Component {
  state = {
    follow: this.props.follow,
    tags: ['Eat', 'Drink', 'Sleep', 'Do'],
    rate: 4,
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
          Comments
        </Text>
      </View>
    );
  }
}


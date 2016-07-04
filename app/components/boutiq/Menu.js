import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

export class Menu extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
});

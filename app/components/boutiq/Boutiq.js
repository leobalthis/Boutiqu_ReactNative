import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Main } from './Main';

export class Boutiq extends Component {
  state = {
    isLoading: false,
    isAuthentified: true,
  }
  render() {
    if(this.state.isAuthentified) {
      return (
        <Main></Main>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          facebook login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

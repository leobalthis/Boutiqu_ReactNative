import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Main } from './Main';
import { Auth } from './Auth';

export class Boutiq extends Component {
  state = {
    isLoading: false,
    isAuthentified: false,
  }
  render() {
    if(this.state.isAuthentified) {
      return (
        <Main></Main>
      )
    }
    return (
      <View style={styles.container}>
        <Auth />
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

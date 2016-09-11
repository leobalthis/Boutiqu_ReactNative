import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Styles } from 'AppStyles';

export class WriteReview extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      text: 'Write a review ...'
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    height: 200,
    borderColor: Styles.COLOR_LIGHTER_5,
    borderWidth: 1,
    color: Styles.COLOR_LIGHTER_5,
  },
});
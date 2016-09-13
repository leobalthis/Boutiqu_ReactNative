import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Styles } from 'AppStyles';

export class WriteReview extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      text: '',
      backgroundColor: '#ededed',
      color: 'white'
    };
  }


  render() {
    return (
      <View style={styles.container}>
      <Text>Write a review</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => this.setState({text})}
        placeholder='What do you think?'/>
        <TouchableOpacity
          style={styles.wrapperG}>
          <Icon name='camera' style={styles.plusIcon}/>
        </TouchableOpacity>
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
    padding: 5,
    margin: 5,
    color: Styles.COLOR_DARKER_45,
  },
  wrapperG: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plusIcon: {
    borderColor: Styles.COLOR_LIGHTER_5,
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 40,
    padding: 10,
    color: Styles.COLOR_PINK,
  }
});
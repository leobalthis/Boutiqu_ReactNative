import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  tags: {
    backgroundColor: Styles.COLOR_GREEN,
    color: Styles.COLOR_WHITE,
    width: 55,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 13,
    textAlign: 'center'
  }
});

export class TagsItem extends Component {
  state = {
    selectedd: ''
  }
  render() {
    return (
        <View>
            <Text style={styles.tags}>Do</Text>
        </View>
    );
  }
}


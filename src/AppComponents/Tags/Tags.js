import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { Styles } from 'AppStyles';
import { TagsItem } from './TagsItem';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },

});

export class Tags extends Component {

  state = {
    selected: ''
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TagsItem />
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import _ from 'lodash';
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

  static labels = ['Eat', 'Drink', 'Sleep', 'Do'];

  constructor(props) {
    super(props);
    this.tags = {};
  }

  getSelectedTags() {
    return _.map(this.tags, (ref, label) => {
      const { selected } = ref.state;
      return { label, selected };
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Tags</Text>
        {Tags.labels.map((label, idx) => (
          <TagsItem
            label={label}
            key={idx}
            ref={(e) => this.tags[label] = e}
          />
        ))}
      </View>
    );
  }
}

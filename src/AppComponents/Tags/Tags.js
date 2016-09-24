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
    flexDirection:'row',
  },
  tagsLabel: {
    flex: 1,
    color: Styles.COLOR_DARKER_45,
  }
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
        <Text style={styles.tagsLabel}>
          {(this.props.tagsLabel) ? 'Choose a tag' : ''}
        </Text>
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

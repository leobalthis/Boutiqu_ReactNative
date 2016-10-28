import React, { Component, PropTypes } from 'react';
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
    marginVertical: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  tagsLabel: {
    flex: 1,
    color: Styles.FONT_COLOR,
  }
});

export class Tags extends Component {
  static labels = ['Eat', 'Drink', 'Sleep', 'Do'];
  static propTypes = {
    tagsLabel: PropTypes.string,
  }
  static defaultProps = {
    tagsLabel: 'Choose a tag'
  };

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
          {this.props.tagsLabel}
        </Text>
        {/* <View style={{
          flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', backgroundColor: 'blue' }}
        > */}
        {Tags.labels.map((label, idx) => (
          <TagsItem
            label={label}
            key={idx}
            onPress={this.getSelectedTags}
            ref={(e) => this.tags[label] = e}
          />
        ))}
        {/* </View> */}
      </View>
    );
  }
}

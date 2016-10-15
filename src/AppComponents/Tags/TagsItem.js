import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
  TouchableOpacity,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  tagSelected: {
    backgroundColor: Styles.COLOR_GREEN,
  },
  tag: {
    backgroundColor: Styles.COLOR_WHITE,
    borderColor: Styles.COLOR_GREEN,
    borderWidth: 1,
    width: 70,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTag: {
    color: Styles.COLOR_GREEN,
    fontSize: 13,
  }
});

export class TagsItem extends Component {

  static propTypes ={
    onPress: PropTypes.func,
    label: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.toggleSelection = this.toggleSelection.bind(this);
  }

  toggleSelection() {
    this.setState({ selected: !this.state.selected });
    this.props.onPress();
  }
  render() {
    const { selected } = this.state;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.toggleSelection}
        style={[styles.tag, selected && styles.tagSelected]}
      >
        <Text style={[styles.textTag, selected && { color: '#fff' }]}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    );
  }
}

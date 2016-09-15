import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  TouchableOpacity,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  tagSelected: {
    backgroundColor: Styles.COLOR_GREEN,
    borderColor: Styles.COLOR_GREEN,
    borderWidth: 1,
    color: Styles.COLOR_WHITE,
    width: 60,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginLeft: 3,
    marginRight: 3,
    fontSize: 13,
    textAlign: 'center'
  },
  tagUnselected: {
    backgroundColor: Styles.COLOR_WHITE,
    borderColor: Styles.COLOR_GREEN,
    borderWidth: 1,
    color: Styles.COLOR_GREEN,
    width: 60,
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

  constructor(props) {
    super(props);

    this.toggleSelection = this.toggleSelection.bind(this);

    this.state = { 
      selected: false,
    };
  }

  toggleSelection() {
    this.setState({ selected: !this.state.selected });
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.toggleSelection} >
        <Text style={ (this.state.selected) ? styles.tagSelected : styles.tagUnselected}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}


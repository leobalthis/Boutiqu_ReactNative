import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Styles.COLOR_PINK,
    borderWidth: 1
  }
});

export class FollowButton extends Component {
  static propTypes = {
    textButton: PropTypes.string,
    backgroundColor: PropTypes.object,
    textColor: PropTypes.string,
  }

  static defaultProps = {
    textColor: 'green',
    textButton: 'Follow'
  };

  constructor(props) {
    super(props);
    this.state = {
      textValue: this.props.textButton
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    const { textValue } = this.state;
    this.setState({
      textValue: textValue === 'Following' ? 'Follow' : 'Following'
    });
  }

  render() {
    const { textValue } = this.state;
    return (
      <TouchableOpacity
        style={[styles.container,
          { backgroundColor: textValue === 'Following' ? Styles.COLOR_PINK : '#fff' }]}
        onPress={() => {this.toggleText();}}
      >
        <Text style={{ color: textValue === 'Following' ? '#fff' : Styles.COLOR_PINK }}>
          {this.state.textValue}
        </Text>
      </TouchableOpacity>
    );
  }
}

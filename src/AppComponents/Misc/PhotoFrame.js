import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Styles, x } from 'AppStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 20,
    width: x,
    height: x / 1.91
  },
  button: {
    position: 'absolute',
    left: x - 30,
    bottom: x / 1.91 - 27,
    backgroundColor: Styles.COLOR_DARKER_60,
    width: 27,
    height: 27,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 2,
  }
});

export class PhotoFrame extends Component {
  static propTypes = {
    closeFrame: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewContainer: {
        height: x / 1.91,
      }
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.props.closeFrame();}}
        >
          <Icon style={styles.icon} name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

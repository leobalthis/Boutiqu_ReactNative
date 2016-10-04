import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rateLabel: {
    color: Styles.COLOR_DARKER_45,
    marginTop: 5,
    marginRight: 10
  },
  icon: {
    fontSize: 20,
    marginLeft: 3,
    color: Styles.COLOR_GREEN,
  },
});

export class Rate extends Component {
  static propTypes = {
    rateLabel: PropTypes.string,
  }
  static defaultProps = {
    rateLabel: 'Rate it:'
  }

  constructor(props) {
    super(props);

    this.state = {
      rateValue: 3,
    };
  }

  setRate(i) {
    this.setState({ rateValue: i });
  }

  render() {
    const { rateValue } = this.state;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.rateLabel}>
          {this.props.rateLabel}
        </Text>
        {_.times(rateValue, (i) => (
          <TouchableOpacity
            onPress={() => {this.setRate(i + 1);}}
            key={i}
          >
            <Icon name="star" style={styles.icon} />
          </TouchableOpacity>
        ))}
        {_.times(5 - rateValue, (i) => (
          <TouchableOpacity
            onPress={() => {this.setRate(i + rateValue + 1);}}
            key={i}
          >
            <Icon name="star-o" style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

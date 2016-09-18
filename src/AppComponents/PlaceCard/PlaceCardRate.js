import React, { Component } from 'react';
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
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: Styles.FONT_SIZE_SMALL,
    marginLeft: 2,
    color: Styles.COLOR_ORANGE,
  },
});

const labelText = ({ label }) => {
  let text;
  if (label) {
    text = <Text>{label}</Text>;
  } else {
    text = null;
  }
  return text;
};

export class PlaceCardRate extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      rateValue: 4,
    };
  }

  render() {
    const { rateValue } = this.state;
    return (
      <View style={styles.wrapper}>
        {_.times(rateValue, (idx) => (
            <Icon name="star" key={idx} style={styles.icon} />
        ))}
        {_.times(5-rateValue, (idx) => (
            <Icon name="star-o" key={idx}  style={styles.icon} />
        ))}
      </View>
    );
  }
}  


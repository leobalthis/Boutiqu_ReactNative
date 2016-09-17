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
    padding: 10,
    flexWrap: 'wrap',
    flexDirection:'row',
  },
  rateLabel: {
    flex: 1,
    color: Styles.COLOR_DARKER_45,
  },
  icon: {
    fontSize: 20,
    marginLeft: 3,
    color: Styles.COLOR_GREEN,
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

export class Rate extends Component {
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
          {(this.props.rateLabel) ? 'Rate it' : ''}
        </Text>
        {_.times(rateValue, (i) => (
          <TouchableOpacity onPress={() => {
            this.setRate(i+1);
          }} key={i+1}>
    		    <Icon name="star" style={styles.icon} />
          </TouchableOpacity>
        ))}
        {_.times(5-rateValue, (i) => (
          <TouchableOpacity onPress={() => {
            this.setRate(i+rateValue+1);
          }} key={i+rateValue+1}>
            <Icon name="star-o" style={styles.icon} />
          </TouchableOpacity>
        ))}
    	</View>
    );
  }
}  


import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Styles.COLOR_DARKER_30,
  },
  buttonMapview: {
    width: 120,
    height: 23,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Styles.COLOR_LIGHTER_5
  },
});

export class MapViewButton extends Component {
  static propTypes = {
    handleMapView: PropTypes.func.isRequired,
    mapView: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      mapView: false,
    };
  }

  render() {
    const { mapView } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.buttonMapview}
        onPress={() => {this.props.handleMapView();}}
      >
        <Text style={styles.text}>
          {mapView ? 'List view' : 'Map view'}
        </Text>
        <Icon name={mapView ? 'list' : 'map-o'} size={16} />
      </TouchableOpacity>
    );
  }
}

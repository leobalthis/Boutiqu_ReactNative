import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  Picker,
  MapView,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
import {
  TagsItem,
  MapViewButton
} from 'AppComponents';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  container: {
    width: x,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  tagsView: {
    flexDirection: 'row',
    width: x - 40,
    justifyContent: 'space-between'
  },
  CommonTextStyle: {
    fontSize: 16,
    color: Styles.COLOR_DARKER_30,
  },
  picker: {
    height: 20,
    width: 90,
    borderWidth: 1
  }
});

// const Item = Picker.Item;

export class PlaceTypeFilter extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    data: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: {
        height: 200
      },
      picker: {
        selected1: 'Top rated',
        selected2: 'Date'
      },
      mapView: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }
    };
    this.handleMapView = this.handleMapView.bind(this);
    this.handleFilterTag = this.handleFilterTag.bind(this);
  }

  onValueChange() {
  }

  handleFilterTag() {
  }

  handleMapView() {
    const { viewStyle } = this.state;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      viewStyle: {
        height: viewStyle.height > 200 ? 200 : 400
      },
      mapView: !this.state.mapView
    });
  }

  render() {
    const { mapView } = this.state;
    let viewStyle = [styles.container, this.state.viewStyle];
    return (
      <Animated.View style={viewStyle}>
        <MapViewButton
          handleMapView={this.handleMapView}
          mapView={this.state.mapView}
        />
        <Text style={styles.CommonTextStyle}>
          {this.props.data.entries.length} places recommended by public users
        </Text>
        <View style={styles.tagsView}>
          <Text style={styles.CommonTextStyle}>
            Tags:
          </Text>
          <TagsItem
            label="Eat"
            onPress={this.handleFilterTag}
          />
          <TagsItem
            label="Drink"
            onPress={this.handleFilterTag}
          />
          <TagsItem
            label="Sleep"
            onPress={this.handleFilterTag}
          />
          <TagsItem
            label="Do"
            onPress={this.handleFilterTag}
          />
        </View>
        {!mapView &&
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
          <Text style={styles.CommonTextStyle}>
            Sort by
          </Text>
          {/* <Picker
            style={styles.picker}
            selectedValue={this.state.picker.selected1}
            onValueChange={this.onValueChange.bind(this, 'selected1')}
          >
            <Item label="Top rated" value="key0" />
            <Item label="Date" value="key1" />
          </Picker> */}
        </View>}
        {mapView && <MapView
          style={{ height: 250, width: x }}
          region={this.state.region}
        />}
      </Animated.View>
    );
  }
}

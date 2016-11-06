import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
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
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20
  },
  wrapperTagsView: {
    marginTop: 15,
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tagsView: {
    flexDirection: 'row',
    width: x - 40,
    justifyContent: 'space-between'
  },
  commonTextStyle: {
    fontSize: 16,
    color: Styles.COLOR_DARKER_30,
  },
});

export class PlaceTypeFilter extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    data: PropTypes.object.isRequired,
    handleStateMapView: PropTypes.func.isRequired,
    isMapView: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      viewStyle: {
        height: 150,
        justifyContent: 'center'
      },
      picker: {
        selected1: 'Top rated',
        selected2: 'Date'
      },
      mapView: this.props.mapView,
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
        height: viewStyle.height > 150 ? 150 : 400
      },
    });
    this.props.handleStateMapView();
  }

  render() {
    const { isMapView } = this.props;
    let viewStyle = [styles.container, this.state.viewStyle];
    return (
      <Animated.View style={viewStyle}>
        <MapViewButton
          handleMapView={this.handleMapView}
          isMapView={this.props.isMapView}
        />
      <View style={[styles.wrapperTagsView, isMapView &&
          { justifyContent: 'flex-start', height: 50 }]}
        >
          {!isMapView &&
          <Text style={styles.commonTextStyle}>
            {this.props.data.entries.length} places recommended by public users
          </Text>}
          <View style={styles.tagsView}>
            <Text style={styles.commonTextStyle}>
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
        </View>
        {isMapView && <MapView
          style={{ height: 250, width: x }}
          region={this.state.region}
        />}
      </Animated.View>
    );
  }
}

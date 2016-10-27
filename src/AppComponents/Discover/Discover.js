import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
} from 'react-native';
import { Boutiq } from 'AppServices';
import {
	PlaceCard,
  PlaceReview,
  PlaceTypeFilter,
} from 'AppComponents';
import { Styles } from 'AppStyles';

export class Discover extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      // mapView: false,
      isLoading: true,
      data: [],
      dataSource: this.ds.cloneWithRows([])
    };
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    Boutiq.getMyNetworkFeed()
    .then(data => {
      this.setState({
        isLoading: false,
        data,
        dataSource: this.ds.cloneWithRows(data.entries)
      });
    });
  }

  // handleMapView() {
  //   const { mapView } = this.state;
  //   this.setState({
  //     mapView: !mapView
  //   });
  // }

  renderListItem(rowData) {
    const { navigator, type } = this.props;
    // const { mapView } = this.props;
    if (rowData.feed_type === 'review') {
      return type === 'search'
      ? <PlaceCard navigator={navigator} {...rowData} />
      : <PlaceReview navigator={navigator} {...rowData} />;
    } else {
      return <View />
    }
  }

  render() {
    const { type } = this.props;
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View>
        {type === 'search' &&
          <PlaceTypeFilter
            data={this.state.data}
            mapView={this.props.mapView}
            handleStateMapView={this.props.handleStateMapView}
          />}
        <ListView
          style={{ backgroundColor: Styles.COLOR_LIGHTER_3 }}
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem}
        />
      </View>
    );
  }
}

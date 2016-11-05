import React, { Component, PropTypes } from 'react';
import {
  ActivityIndicator,
  ListView,
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
      isMapView: false,
      isLoading: true,
      data: [],
      dataSource: this.ds.cloneWithRows([])
    };
    this.renderListItem = this.renderListItem.bind(this);
    this.handleStateMapView = this.handleStateMapView.bind(this);
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

  handleStateMapView() {
    const { isMapView } = this.state;
    this.setState({
      isMapView: !isMapView
    });
  }

  renderListItem(rowData) {
    const { navigator, type } = this.props;
    if (rowData.feed_type === 'review') {
      return type === 'search'
      ? <PlaceCard navigator={navigator} {...rowData} />
      : <PlaceReview navigator={navigator} {...rowData} />;
    }
    return <View />;
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
            isMapView={this.state.isMapView}
            handleStateMapView={this.handleStateMapView}
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

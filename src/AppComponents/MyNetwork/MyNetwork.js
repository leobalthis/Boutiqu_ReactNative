import React, { Component, PropTypes } from 'react';

import {
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';
import { Boutiq } from 'AppServices';
import {
	PlaceCard,
  PostStatus,
  PlaceTypeFilter,
  PlaceReview
} from 'AppComponents';
import { Styles } from 'AppStyles';

export class MyNetwork extends Component {
  static propTypes = {
    user: PropTypes.object
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
    this.handleStateMapView = this.handleStateMapView.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.onPressStatus = this.onPressStatus.bind(this);
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

  renderListItem(rowData) {
    const { navigator, type } = this.props;
    if (rowData.feed_type === 'review') {
      return type === 'search'
      ? <PlaceCard navigator={navigator} {...rowData} />
      : <PlaceReview navigator={navigator} {...rowData} />;
    } else {
      return <View />
    }
  }

  handleStateMapView() {
    const { isMapView } = this.state;
    console.log("pressed", isMapView);
    this.setState({
      isMapView: !isMapView
    });
  }

  onPressStatus() {
    console.log("will publish status");
  }

  render() {
    const { type } = this.props;
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={{ backgroundColor: Styles.COLOR_LIGHTER_3 }}>
        {type === 'search' &&
          <PlaceTypeFilter
            data={this.state.data}
            isMapView={this.state.isMapView}
            handleStateMapView={this.handleStateMapView}
          />}
        {type === 'home' &&
          <PostStatus onPress={this.onPressStatus} user={this.props.user}
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

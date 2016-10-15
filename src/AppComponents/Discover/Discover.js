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
  PlaceTypeFilter,
} from 'AppComponents';

export class Discover extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isLoading: true,
      data: [],
      dataSource: this.ds.cloneWithRows([])
    };
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    Boutiq.getDiscoverFeed()
    .then(data => {
      this.setState({
        isLoading: false,
        data,
        dataSource: this.ds.cloneWithRows(data.entries)
      });
    });
  }

  renderListItem(rowData) {
    const { navigator } = this.props;
    return <PlaceCard navigator={navigator} {...rowData} />;
  }

  render() {
    // console.log("debug", this.state);
    const { type } = this.props;
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View>
        {type === 'search' && <PlaceTypeFilter data={this.state.data} />}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem}
        />
      </View>
    );
  }
}

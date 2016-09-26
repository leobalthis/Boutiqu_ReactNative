import React, { Component, PropTypes } from 'react';

import {
  ActivityIndicator,
  ListView,
} from 'react-native';

import { Boutiq } from 'AppServices';


import {
	PlaceCard,
} from 'AppComponents';

export class Discover extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
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
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderListItem}
      />
    );
  }
}

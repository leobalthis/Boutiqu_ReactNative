import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ListView,
  View,
} from 'react-native';

import { PlaceReview } from 'AppComponents';
import { Styles } from 'AppStyles';
import { Boutiq } from 'AppServices';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export class MyLikes extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isLoading: true,
      user: [],
      dataSource: this.ds.cloneWithRows([])
    };

    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidMount() {
    // const { contactType } = this.props;
    Boutiq.getUserProfile()
    .then(user => {
      this.setState({
        isLoading: false,
        user,
        dataSource: this.ds.cloneWithRows(user.feed_entries)
      });
    });
  }

  renderListItem(rowData) {
    if (rowData.feed_type === 'review') {
      return <PlaceReview {...this.props} {...rowData} />;
    }
    return <View />;
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem}
        />
      </View>
    );
  }
}

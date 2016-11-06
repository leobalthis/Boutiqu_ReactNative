import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ListView,
  View,
} from 'react-native';

import { PlaceCard, Tags } from 'AppComponents';
import { Styles, x } from 'AppStyles';
import { Boutiq } from 'AppServices';

const styles = StyleSheet.create({
  wrapperTags: {
    height: 80,
    width: x,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  }
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
      return <PlaceCard
        {...this.props}
        {...rowData}
        lastReviewProfiles={false}
      />;
    }
    return <View />;
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <ScrollView style={{ backgroundColor: Styles.COLOR_LIGHTER_3 }}>
        <View style={styles.wrapperTags}>
          <Tags tagsLabel="Tags: " />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderListItem}
        />
      </ScrollView>
    );
  }
}

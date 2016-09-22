import React, { Component, PropTypes } from 'react';
import {
	Text,
	ScrollView,
  View,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
	PlaceCard,
  MyNetwork,
  Discover,
} from 'AppComponents';
import { styles } from './styles';

export class Home extends Component {
  static propTypes = {
    index: PropTypes.number,
  }
	constructor(props) {
		super(props);
		this.initialPageIndex = props.index ? props.index : 0;
	}
  render() {
    return (
      <ScrollableTabView style={styles.tabs} initialPage={this.initialPageIndex}>
        <ScrollView tabLabel="My Network" style={styles.tabsContent}>
          <MyNetwork />
        </ScrollView>
        <ScrollView tabLabel="Discover" style={styles.tabsContent}>
          <Discover />
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

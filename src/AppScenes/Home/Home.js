import React, { Component, PropTypes } from 'react';
import {
	Text,
	ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
	PlaceCard,
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
  state = {
    text: '',
  }
  render() {
    return (
      <ScrollableTabView style={styles.tabs} initialPage={this.initialPageIndex}>
        <ScrollView tabLabel="My Network" style={styles.tabsContent}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
				</ScrollView>
        <ScrollView tabLabel="Discover" style={styles.tabsContent}>
          <Text>Discover</Text>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

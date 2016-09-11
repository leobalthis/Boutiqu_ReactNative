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
    navigator: PropTypes.object.isRequired,
  }
  state = {
    text: '',
  }
  render() {
    return (
      <ScrollableTabView style={styles.tabs}>
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

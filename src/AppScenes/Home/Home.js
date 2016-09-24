import React, { Component, PropTypes } from 'react';
import {
	ScrollView,
  View,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  MyNetwork,
  Discover,
  NavigationBar,
  NavBarSideMenu
} from 'AppComponents';
import { styles } from './styles';

export class Home extends Component {
  static propTypes = {
    index: PropTypes.number,
  }
  constructor(props) {
    super(props);
    this.initialPageIndex = props.index ? props.index : 1;
  }
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.wrapper}>
          <ScrollableTabView style={styles.tabs}>
            <ScrollView tabLabel="My Network" style={styles.tabsContent}>
              <MyNetwork />
						</ScrollView>
            <ScrollView tabLabel="Discover" style={styles.tabsContent}>
              <Discover />
            </ScrollView>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

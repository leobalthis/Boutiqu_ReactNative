import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  Discover,
  MyNetwork,
} from 'AppComponents';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: Styles.COLOR_GREEN,
  },
  tabsContent: {
    flexDirection: 'column',
    backgroundColor: Styles.COLOR_LIGHTER_3,
  },
});

export class SearchResultScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const leftButtonConfig = {
      title: '< Back',
      tintColor: Styles.COLOR_DARKER_30,
      handler: () => this.props.navigator.resetTo('search'),
    };
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor="#fff"
          tabBarInactiveTextColor="#fff"
          tabBarUnderlineStyle={{ height: 5, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          style={styles.tabs}
        >
          <ScrollView tabLabel="My network" style={styles.tabsContent}>
            <MyNetwork type="search" {...this.props} />
          </ScrollView>
          <ScrollView tabLabel="Discover" style={styles.tabsContent}>
            <Discover type="search" {...this.props} />
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

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
    navigator: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.initialPageIndex = props.index ? props.index : 0;
  }
  render() {
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.wrapper}>
          <ScrollableTabView
            initialPage={this.initialPageIndex}
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#fff"
            tabBarUnderlineStyle={{ height: 5, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            style={styles.tabs}
          >
            <ScrollView tabLabel="My network" style={styles.tabsContent}>
              <MyNetwork type="home" {...this.props} />
						</ScrollView>
            <ScrollView tabLabel="Discover" style={styles.tabsContent}>
              <Discover type="home" {...this.props} />
            </ScrollView>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

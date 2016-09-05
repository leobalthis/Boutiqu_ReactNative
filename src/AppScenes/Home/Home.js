import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  NavBarSideMenu,
  PostStatus,
	PlaceCard,
	Search,
  Footer,
} from 'AppComponents';
import { styles } from './styles';

export class Home extends Component {
  state = {
    text: '',
  }
  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <NavigationBar
            tintColor={styles.navBarTint.color}
            title={{ title: 'Boutiq' }}
            leftButton={<NavBarSideMenu {...this.props} />}/>
          <ScrollableTabView style={styles.tabs}>
            <View tabLabel="My Network" style={styles.tabsContent}>
              <PlaceCard />
            </View>
            <View tabLabel="Discover" style={styles.tabsContent}>
              <Text>Discover</Text>
            </View>
          </ScrollableTabView>
        </View>
     		<Footer />
      </View>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	ScrollView,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {
  NavBarSideMenu,
  PostStatus,
	PlaceCard,
  Footer,
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
      <View style={{ flex: 1, }}>
        <View style={styles.wrapper}>
					<NavigationBar
						tintColor={styles.navBarTint.color}
						title={{ title: 'Boutiq' }}
						leftButton={<NavBarSideMenu {...this.props} />}
					/>
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
        </View>
				<Footer {...this.props} />
      </View>
    );
  }
}

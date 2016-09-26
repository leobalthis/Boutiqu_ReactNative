import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  MapView,
  Image,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { APP_PLACE, TagsView, Rate, Footer } from 'AppComponents';
import { Styles, x, y } from 'AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navBarTint: {
    color: Styles.COLOR_GREEN,
  },
  tagWrapper: {
    backgroundColor: Styles.COLOR_GREEN,
    width: 55,
    height: 15,
    marginLeft: 5,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: Styles.COLOR_WHITE,
    fontSize: 12,
  },
  icon: {
    color: 'rgb(246, 231, 28)',
  }
});

export class PlaceDetails extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };
    const tagsflag = APP_PLACE.tag.map((tag, index) => {
      return (
        <View
          key={index}
          style={styles.tagWrapper}
        >
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      );
    });
    // const { placeDetails } = this.props['route']['passprops']
    // console.log(placeDetails);
    const { name, locality, administrative_area_level_1, country } = APP_PLACE;
    return (
      <View style={styles.container}>
        <NavigationBar
          tintColor={styles.navBarTint.color}
          title={{ title: 'Place Details' }}
          leftButton={leftButtonConfig}
        />
        <ScrollView>
          <Image
            resizeMode="cover"
            style={{ width: x, height: x / 1.91 }}
            source={{ uri: APP_PLACE.photo }}
          />
        <View style={{flex: 1, padding: 20, alignItems: 'stretch'}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            <Text style={{ color: Styles.COLOR_DARKER_45, fontWeight: '700' }}>
              Bucket List
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TagsView tags={APP_PLACE.tag} />
            </View>
          </View>
          <Text style={{ fontSize: 12, marginBottom: 20, color: Styles.COLOR_DARKER_45 }}>
            {name}, {locality}, {administrative_area_level_1}, {country}
          </Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ color: Styles.COLOR_DARKER_30 }}>
              {APP_PLACE.avg_rating ? 'Network Users Ratings' : 'Other users Rating'}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={17} style={styles.icon} />
              <Icon name="star" size={17} style={styles.icon} />
              <Icon name="star" size={17} style={styles.icon} />
              <Icon name="star" size={17} style={styles.icon} />
              <Icon name="star" size={17} style={styles.icon} />
            </View>
          </View>
          <MapView
            style={{ height: 170, marginTop: 30, marginBottom: 10 }}
            region={{
              latitude: -33.865143,
              longitude: 151.209900,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        </View>
        <View>
          <ScrollableTabView
            tabBarActiveTextColor={Styles.COLOR_GREEN}
            tabBarInactiveTextColor={Styles.COLOR_DARKER_15}
            tabBarUnderlineStyle={{ backgroundColor: Styles.COLOR_GREEN }}
            style={{ padding: 5 }}>
            <ScrollView tabLabel="My network reviews">
              <View style={{ padding: 20 }}>
                <Text style={{ color: Styles.COLOR_DARKER_30 }}>
                  None of your friends and network have been to this place yet...
                  But you can check what Other users think about it!
                </Text>
                <Text style={{ color: Styles.COLOR_DARKER_30 }}>
                  Have you been there? post a rewiew and spread the word abput this place!
                </Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="Other users reviews" style={styles.tabsContent}>
              <View style={{ padding: 20 }}>
                <Text style={{ color: Styles.COLOR_DARKER_30 }}>
                  None of your friends and network have been to this place yet...
                  But you can check what Other users think about it!
                </Text>
                <Text style={{ color: Styles.COLOR_DARKER_30 }}>
                  Have you been there? post a rewiew and spread the word abput this place!
                </Text>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
        </ScrollView>
      </View>
    );
  }
}

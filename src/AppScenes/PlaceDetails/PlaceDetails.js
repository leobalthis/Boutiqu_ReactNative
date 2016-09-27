import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  ListView,
  MapView,
  Image,
  StyleSheet,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { APP_PLACE, TagsView, ButtonView, Rate, Footer, ReviewCard } from 'AppComponents';
import { Styles, x } from 'AppStyles';

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
  buttonFavouriteContainer: {
    position: 'absolute',
    bottom: 25,
    left: x - 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Styles.COLOR_NORMAL_GREY,
    shadowColor: Styles.COLOR_NORMAL_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0
    },
    backgroundColor: 'white'
  },
  tagText: {
    color: Styles.COLOR_WHITE,
    fontSize: 12,
  },
  icon: {
    color: 'rgb(246, 231, 28)',
  }
});

const reviewText = APP_PLACE.network_entries.map(entry => {
  return entry.text;
})

export class PlaceDetails extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(reviewText),
      isFavourite: false
    };
    this.handleFavouritePress = this.handleFavouritePress.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  handleFavouritePress() {
    const { isFavourite } = this.state;
    this.setState({
      isFavourite: !isFavourite
    });
  }

  setRefresh() {
    this.setState({
      isResfreshing: true
    });
  }

  stopRefresh() {
    console.log(this.state);
    this.setState({
      isResfreshing: false
    });
  }

  onRefresh() {
    this.setRefresh();
    console.log('refreshhhh');
    this.stopRefresh();
  }

  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };
    // const { placeDetails } = this.props['route']['passprops']
    // console.log(placeDetails);
    const { name, locality, administrative_area_level_1, country } = APP_PLACE;
    const { isFavourite } = this.state;
    console.log(APP_PLACE.network_entries);
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
        <View style={{ flex: 1, padding: 20, marginTop: 10, alignItems: 'stretch' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            <Text style={{ color: Styles.COLOR_DARKER_45, fontWeight: '700' }}>
              Bucket List
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TagsView tags={APP_PLACE.tag} />
            </View>
            <ButtonView
              styleContainer={styles.buttonFavouriteContainer}
              iconInfo={{
                name: isFavourite ? 'heart' : 'heart-o',
                color: isFavourite ? Styles.COLOR_GREEN : Styles.FONT_COLOR
              }}
              callback={this.handleFavouritePress} />
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
          >
            <ScrollView tabLabel="My network reviews">
              <View style={{ padding: 20 }}>
                <ListView
                  style={styles.container}
                  dataSource={this.state.dataSource}
                  renderRow={(data) => <View><Text>{data}</Text></View>}
                />
              </View>
            </ScrollView>
            <ScrollView tabLabel="Other users reviews" style={styles.tabsContent}>
              <ReviewCard
                onRefresh={this.onRefresh}
                setRefresh={this.setRefresh}
                stopRefresh={this.stopRefresh}
              />
            </ScrollView>
          </ScrollableTabView>
        </View>
        </ScrollView>
      </View>
    );
  }
}

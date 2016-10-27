import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Rate, Tags, TagsView, ButtonView, ProfilePhoto } from 'AppComponents';
import { api } from 'AppServices';
import { ProfileName } from './ProfileName';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    backgroundColor: Styles.COLOR_WHITE,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
  },
  wrapperCardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: x
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'center',
  },
  viewCardInfo: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginTop: 10
  },
  labelTextPlace: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  stars: {
    color: 'yellow',
    fontSize: 18
  },
  buttonFavouriteContainer: {
    marginLeft: 20
  },
  wrapperBottomImageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export class PlaceCard extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    // mapView: PropTypes.bool.isRequired,
    place: PropTypes.object.isRequired,
    place_liked: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.place_liked,
      mapView: this.props.mapView
    };
    this.handleGotoPlaceDetails = this.handleGotoPlaceDetails.bind(this);
    this.handleLikePress = this.handleLikePress.bind(this);
  }

  handleGotoPlaceDetails() {
    // this.setState({
    // 	isloading: true
    // });
    api.getPlaceDetails(25)
    .then(res => {
      // if (res.error) {
      // 	this.setState({
      // 		error: 'place not found',
      // 		isLoading: false
      // 	})
      // }
      // else {
      this.props.navigator.push({
        id: 'placedetails',
        passprops: { placeDetails: res }
      });
    // }
    });
  }

  addressFormater(address) {
    const index = address.indexOf(',', address.indexOf(',') + 1);
    const substring = address.slice(0, index);
    return substring;
  }

  handleLikePress() {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked
    });
  }

  render() {
    const { mapView } = this.state
    const { isLiked } = this.state;
    console.log("stateMapView", mapView);
    console.log("propsMapView", this.props.mapView);
    return (
      <View style={styles.wrapper} >
        {
          <View style={{ flexDirection: 'row', height: 40 }}>
          <View style={{ position: 'absolute', top: 5, left: 60 }}>
            <ProfilePhoto
              type="circle"
              size={30}
              border={true}
              borderColor='#fff'
            />
          </View>
          <View style={{ position: 'absolute', top: 5, left: 40 }}>
            <ProfilePhoto
              type="circle"
              size={30}
              border={true}
              borderColor='#fff'
            />
          </View>
          <View style={{ position: 'absolute', top: 5, left: 20 }}>
            <ProfilePhoto
              type="circle"
              size={30}
              border={true}
              borderColor='#fff'
            />
          </View>
        </View>
        }
        <TouchableOpacity onPress={() => this.handleGotoPlaceDetails()}>
          <Image
            source={{ uri: this.props.place.photo }}
            style={styles.container}
          >
            <LinearGradient
              locations={[0, 0.4]}
              colors={[Styles.COLOR_DARKER_60, 'transparent']}
              style={styles.linearGradient}
            >
              <View style={styles.wrapperCardInfo}>
                <View style={styles.viewCardInfo}>
                  <Text style={[styles.labelTextPlace,
                      this.props.place.name_address.length > 30 && { fontSize: 15 }]}
                  >
                    {this.props.place.name}
                  </Text>
                  <Text style={{ color: '#fff' }}>
                    {this.props.place.local}
                  </Text>
                  {/* <Text style={[{ color: '#fff' },
                    this.props.place.name_address.length > 30 && { fontSize: 13 }]}
                  >
                    {
                      this.props.place.name_address.length > 40
                      ? this.addressFormater(this.props.place.name_address)
                      : this.props.place.name_address
                    }
                  </Text> */}
                </View>
                <View style={[styles.viewCardInfo, { flexDirection: 'row', marginRight: 20 }]}>
                  <Icon name="star" style={styles.stars} />
                  <Icon name="star" style={styles.stars} />
                  <Icon name="star" style={styles.stars} />
                  <Icon name="star" style={styles.stars} />
                  <Icon name="star" style={styles.stars} />
                  <Text style={{ color: '#fff' }}>
                    (30)
                  </Text>
                </View>
              </View>

            </LinearGradient>
          </Image>
        </TouchableOpacity>
        <View style={styles.wrapperBottomImageInfo}>
          <ButtonView
            styleContainer={styles.buttonFavouriteContainer}
            iconInfo={{
              name: isLiked ? 'heart' : 'heart-o',
              color: isLiked ? Styles.COLOR_GREEN : Styles.FONT_COLOR
            }}
            callback={this.handleLikePress}
          />
          <View style={{ marginRight: 20 }}>
            <TagsView tags={this.props.place.tag} />
          </View>
        </View>
      </View>
    );
  }
}

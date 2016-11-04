import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Styles, x } from 'AppStyles';
import { ProfilePhoto } from 'AppComponents';
import { PlaceCardRate } from './PlaceCardRate';

const styles = StyleSheet.create({
  wrapper: {
    width: x,
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  wrapperProfileName: {
    marginLeft: 10
  },
  profileName: {
    color: Styles.FONT_COLOR,
    fontSize: Styles.FONT_SIZE_SMALL,
    fontWeight: 'bold',
  },
  placeName: {
    color: Styles.FONT_COLOR,
    fontSize: Styles.FONT_SIZE_SMALLER,
  },
  local: {
    color: Styles.FONT_COLOR,
    fontSize: Styles.FONT_SIZE_SMALLER,
  },
  buttonFollow: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 19,
    width: 100,
    borderWidth: 1,
    borderColor: Styles.COLOR_PINK,
  },
  following: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.COLOR_PINK,
  },
  postTime: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.FONT_COLOR,
    marginBottom: 5,
  }
});

export class ProfileName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: this.props.follow_type,
    };
  }

  setFollowStatus(f) {
    this.setState({ follow: f });
    //save in database
  }

  followStatus(followType) {
    const { follow } = this.state;
    let followingStatus;
    if (followType === 'Friend') {
      followingStatus = <Text style={styles.postTime}>2 weeks ago</Text>;
    } else {
      followingStatus =
      (<TouchableOpacity
        onPress={() => this.setFollowStatus('Friend')}
        style={styles.buttonFollow}
        >
        <Text style={styles.following}>Follow</Text>
      </TouchableOpacity>);
    }
    return followingStatus;
  }

  render() {
    const { follow } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row' }}>
          <ProfilePhoto type="circle" size={40} border={false} />
          <View style={styles.wrapperProfileName}>
            <Text style={styles.profileName}>{this.props.review_user.name}</Text>
            <Text style={styles.placeName}>{this.props.place.name}</Text>
            <Text style={styles.local}>{this.props.place.local}</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          {this.followStatus(follow)}
          <PlaceCardRate rate={this.props.stars} />
        </View>
      </View>
    );
  }
}

ProfileName.propTypes = {
  follow_type: PropTypes.string,
  follow: PropTypes.bool.isRequired,
  review_user: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  stars: PropTypes.number.isRequired,
};

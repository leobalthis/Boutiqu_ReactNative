import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Styles } from 'AppStyles';
import { ProfilePhoto } from 'AppComponents';
import { PlaceCardTags} from './PlaceCardTags';
import { PlaceCardRate } from './PlaceCardRate';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  wrapperProfileName: {
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
  wrapperFollow: {
    flexDirection:'row',
    width: 150,
    justifyContent: 'flex-end',
  },
  following: {
    width: 100,
    fontSize: Styles.FONT_SIZE_SMALLER,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Styles.COLOR_PINK,
    color: Styles.COLOR_PINK,
    padding: 2,
    marginBottom: 2,
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
    let followingStatus;
    if (followType === 'Friend') {
      followingStatus = <Text style={styles.postTime}>2 weeks ago</Text>;
    } else {
      followingStatus = <TouchableOpacity onPress={() => this.setFollowStatus('Friend')}>
        <Text style={styles.following}>{this.state.follow}</Text>
        </TouchableOpacity>;
    }
    return followingStatus;
  };

  render() {
    const { follow } = this.state;

    return (
      <View style={styles.wrapper}>
        <ProfilePhoto type="circle" size={40} border={false} />
        <View style={styles.wrapperProfileName}>
          <Text style={styles.profileName}>{this.props.review_user.name}</Text>
          <Text style={styles.placeName}>{this.props.place.name}</Text>
          <Text style={styles.local}>{this.props.place.local}</Text>
        </View>
        <View style={styles.wrapperProfileName}>
          <View style={styles.wrapperFollow}>
            {this.followStatus(follow)}
          </View>
          <PlaceCardRate rate={this.props.stars} />
        </View>
      </View>
    );
  }
}

ProfileName.propTypes = {
  follow: PropTypes.bool.isRequired,
  review_user: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  stars: PropTypes.number.isRequired,
};

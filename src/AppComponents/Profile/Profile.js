import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
  Switch,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import {
	ProfilePhoto,
	ProfileFollow,
} from 'AppComponents';
import { Styles } from 'AppStyles';
import { styles } from './styles';

export class Profile extends Component {
  static propTypes = {
    profileType: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    handleStatus: PropTypes.func,
    handleFollowing: PropTypes.func,
    isPublic: PropTypes.bool,
    following: PropTypes.bool,
  }

  renderProfileType() {
    const { isPublic, profileType, following } = this.props;
    switch (profileType) {
      case 'my profile':
        return (
          <View>
            <View style={styles.wrapperProStatus}>
              <Text style={styles.proRightTextProfileType}>
                {isPublic ? 'Public Profile' : 'Private Profile'}
              </Text>
              <Switch
                onTintColor={Styles.COLOR_GREEN}
                style={styles.switch}
                onValueChange={(value) => this.props.handleStatus(value)}
                value={isPublic}
              />
            </View>
            <Text style={styles.proRightTextProfileTypeInfo}>
              When your profile is public, your reviews are displayed in the discover feed and otehr users can follow you.
              Be an influencer and spread the world about places you like and want to remember.
            </Text>
          </View>
        );
      case 'member':
        return (
          <View style={styles.ViewFollowButton}>
            <TouchableOpacity
              onPress={() => {this.props.handleFollowing();}}
              style={[styles.followButton, following && { backgroundColor: Styles.COLOR_PINK }]}>
              <Text style={[styles.textFollowButton, following && { color: '#fff' }]}>
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        );
        break;
      default:

    }
  };

  render() {
    const { name, location, propic, followers_count,
      followings_count, user_friends, feed_entries } = this.props.user;
    const { isPublic, profileType } = this.props;
    console.log(this.props);
    return (
      <View style={styles.wrapper}>
        <ScrollView style={{ backgroundColor: '#ddd' }}>
          <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.profileWrapper}>
              <View style={[styles.proleft, profileType === 'member' && {justifyContent: 'flex-start', marginTop: 30}]}>
                <ProfilePhoto type="circle" size={90} border={false} source={propic} />
                {
                  profileType === 'my profile' &&
                  <Text style={styles.proleftText}>
                    Spread the word about Boutiq!
                  </Text>
                }
              </View>
              <View style={styles.proRight}>
                <Text style={styles.proRightTextName}>
                  {name}
                </Text>
                <Text style={styles.proRightTextLocation}>
                  {location}
                </Text>
                {this.renderProfileType()}
              </View>
            </View>
            <View style={styles.profileFollowers}>
              <TouchableOpacity
                onPress={() => this.props.navigator.push({
                  id: 'reviewcreator' })
                }
              >
                <ProfileFollow
                  routeId="home"
                  label="Friends"
                  num={user_friends.length}
                  {...this.props}
                />
              </TouchableOpacity>
              <View style={styles.hLine} />
              <ProfileFollow
                routeId="home"
                label="Followers"
                num={followers_count}
                {...this.props}
              />
              <View style={styles.hLine} />
              <ProfileFollow
                routeId="home"
                label="Following"
                num={followings_count}
                {...this.props}
              />
              <View style={styles.hLine} />
              <ProfileFollow
                routeId="home"
                label="Reviews"
                num={feed_entries.length}
                {...this.props}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

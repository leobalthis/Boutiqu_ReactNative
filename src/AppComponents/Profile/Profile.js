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
              When your profile is public, your reviews are displayed in the
              discover feed and other users can follow you.
              Be an influencer and spread the world about places you like and want to remember.
            </Text>
          </View>
        );
      case 'member':
        return (
          <View style={styles.ViewFollowButton}>
            <TouchableOpacity
              onPress={() => {this.props.handleFollowing();}}
              style={[styles.followButton, following && { backgroundColor: Styles.COLOR_PINK }]}
            >
              <Text style={[styles.textFollowButton, following && { color: '#fff' }]}>
                {following ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  }

  render() {
    const { name, location, propic, followers_count,
      followings_count, user_friends, feed_entries } = this.props.user;
    const { profileType } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView style={{ backgroundColor: '#ddd' }}>
          <View style={{ backgroundColor: '#fff' }}>
            <View style={styles.profileWrapper}>
              <View style={[styles.proleft,
                  profileType === 'member' && { justifyContent: 'flex-start', marginTop: 10 }]}
              >
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
                  {profileType === 'my profile' ? location : 'San Francisco, CA, United States'}
                </Text>
                {this.renderProfileType()}
              </View>
            </View>
            <View style={styles.profileFollowers}>
              <TouchableOpacity
                onPress={() => this.props.navigator.push({
                  id: 'contactslist',
                  data: {
                    contactType: 'friends'
                  }
                })
                }
              >
                <ProfileFollow
                  label="Friends"
                  num={profileType === 'my profile' ? user_friends.length : 13}
                  {...this.props}
                />
              </TouchableOpacity>
              <View style={styles.hLine} />
              <TouchableOpacity
                onPress={() => this.props.navigator.push({
                  id: 'contactslist',
                  data: {
                    contactType: 'followers'
                  }
                })
                }
              >
                <ProfileFollow
                  label="Followers"
                  num={profileType === 'my profile' ? followers_count : 13}
                  {...this.props}
                />
              </TouchableOpacity>
              <View style={styles.hLine} />
              <TouchableOpacity
                onPress={() => this.props.navigator.push({
                  id: 'contactslist',
                  data: {
                    contactType: 'followings'
                  }
                })
                }
              >
                <ProfileFollow
                  label="Following"
                  num={profileType === 'my profile' ? followings_count : 13}
                  {...this.props}
                />
              </TouchableOpacity>
              <View style={styles.hLine} />
              <ProfileFollow
                label="Reviews"
                num={profileType === 'my profile' ? feed_entries.length : 13}
                {...this.props}
              />
          </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

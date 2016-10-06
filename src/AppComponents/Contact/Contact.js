import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { ProfilePhoto, FollowButton } from 'AppComponents';
import { styles } from './styles';

export class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    propic: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  }

  render() {
    const { propic, name, user } = this.props;
    const userFollowings = user.user_followings.map(u => u.name);

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ProfilePhoto
            type="circle"
            source={propic}
            size={40}
            border={false}
          />
        </View>
        <View style={{ flex: 2, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 12 }}>
            {name}
          </Text>
        </View>
        <View style={{ flex: 2, alignItems: 'flex-end' }}>
          <FollowButton textButton={userFollowings.toString() === name ? 'Following' : 'Follow'} />
        </View>
      </View>
    );
  }
}

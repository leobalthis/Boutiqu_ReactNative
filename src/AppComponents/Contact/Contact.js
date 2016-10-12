import React, { PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { ProfilePhoto, FollowButton } from 'AppComponents';
import { styles } from './styles';

export const Contact = ({ name, propic, contactType, user }) => {
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
        <FollowButton
          textButton={userFollowings.toString() === name ? 'Following' : 'Follow'}
          contactType={contactType}
        />
      </View>
    </View>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  propic: PropTypes.string.isRequired,
  contactType: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

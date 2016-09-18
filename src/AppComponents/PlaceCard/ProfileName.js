import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
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
});

export class ProfileName extends Component {
  state = {
    follow: this.props.follow,
    tags: ['Eat', 'Drink', 'Sleep', 'Do'],
    rate: 4,
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ProfilePhoto type="circle" size={40} border={false} />
        <View style={styles.wrapperProfileName}>
          <Text style={styles.profileName}>{this.props.name}</Text>
          <Text style={styles.placeName}>{this.props.placeName}</Text>
          <Text style={styles.local}>{this.props.local}</Text>
        </View>        
        <View style={styles.wrapperProfileName}>
          <View style={styles.wrapperFollow}>
            <Text style={styles.following}>
              {(this.state.follow) ? 'Following' : 'Follow'}
            </Text>
          </View>
          <PlaceCardTags tags={this.state.tags} />
          <PlaceCardRate rate={this.state.rate} />
        </View>
      </View>
    );
  }
}

ProfileName.propTypes = {
  name: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
};

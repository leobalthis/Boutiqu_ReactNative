import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Profile,
} from 'AppComponents';

export class MemberProfileScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false
    };
    this.handleFollowing = this.handleFollowing.bind(this);
  }

  handleFollowing() {
    console.log("debug");
    this.setState({
      following: this.state.following ? false : true
    });
  }

  render() {
    console.log('props sent to member profile: ', this.props);
    return (
      <View style={{ flex:1 }}>
        <Profile
          profileType="member"
          following={this.state.following}
          handleFollowing={this.handleFollowing}
          user={this.props.data.review_user}
          navigator={this.props.navigator}
          isPublic={this.state.isPublic}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import {
  Profile,
} from 'AppComponents';
import { Styles } from 'AppStyles';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';


export class MemberProfileScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      following: false
    };
    this.handleFollowing = this.handleFollowing.bind(this);
  }

  handleFollowing() {
    this.setState({
      following: !this.state.following
    });
  }

  render() {
    const leftButtonConfig = {
      // title: <Icon name="close" size={22} color={Styles.COLOR_DARKER_30} />,
      title: '< Back',
      tintColor: Styles.COLOR_DARKER_30,
      handler: () => this.props.navigator.pop(),
    };
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <NavigationBar
          style={{ height: 45, marginTop: -15 }}
          tintColor="#fff"
          leftButton={leftButtonConfig}
        />
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

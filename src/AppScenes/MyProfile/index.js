import React, { Component, PropTypes } from 'react';
import {
	View,
} from 'react-native';

import {
  Profile,
} from 'AppComponents';
import NavigationBar from 'react-native-navbar';

export class MyProfile extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isPublic: true
    };
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleStatus() {
    this.setState({
      isPublic: this.state.isPublic ? false : true
    });
  }

  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };
    console.log('my Pro', this.state);
    return (
      <View style={{ flex: 1 }}>
        <Profile
          profileType="my profile"
          user={this.props.user}
          navigator={this.props.navigator}
          handleStatus={this.handleStatus}
          isPublic={this.state.isPublic}
        />
      </View>
    );
  }
}

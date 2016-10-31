import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import { Main, Signin, Onboarding } from 'AppScenes';
import { Auth, User, api } from 'AppServices';
import { AppProfile } from 'AppComponents';
import { userProfile } from '../AppServices/fixtures/userProfile';
// import { PostModel } from 'AppModels';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export class Boutiq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthentified: false,
    };
    this.userOnboarded = this.userOnboarded.bind(this);
  }

  componentWillMount() {
    // const m = new PostModel({ id: 10, comments: [{ id: 2 }] });
    // m.removeComment({ text: 'BLOCK!', commentId: 2 });
    // m.addComment({ text: 'LOOL' });
    const promises = [Auth.isSignedIn(), AsyncStorage.getItem('onboarding')];
    Promise.all(promises)
    .then(([isSignedIn, onboarding]) => {
      this.setState({
        isLoading: false,
        isAuthentified: isSignedIn,
        isOnboarded: Boolean(onboarding)
      });
    });
  }

  userOnboarded() {
    AsyncStorage.setItem('onboarding', 'done');
    this.setState({
      isOnboarded: true,
    });
  }

  render() {
    let view;
    if (this.state.isLoading) {
      view = (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
          />
        </View>
      );
    } else if (this.state.isAuthentified) {
      if (!this.state.isOnboarded) {
        view = (
          <Onboarding
            onSubmit={({ location, email }) => {
              User.set({ location, email });
              this.userOnboarded();
            }}
            onDismiss={this.userOnboarded}
          />
        );
      } else {
        view = (
          <Main
            // user={this.state.user}
            user={ AppProfile }
            onLogout={() => {
              Auth.signout();
              this.setState({ isAuthentified: false });
            }}
          />
        );
      }
    } else {
      view = (
        <Signin onLogin={() => this.setState({ isAuthentified: true })} />
      );
    }
    return view;
  }
}

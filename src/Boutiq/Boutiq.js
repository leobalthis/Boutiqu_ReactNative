import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import { Main, Signin } from 'AppScenes';
import { Auth } from 'AppServices';
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
  state = {
    isLoading: true,
    isAuthentified: false,
  }
  componentWillMount() {
    // const m = new PostModel({ id: 10, comments: [{ id: 2 }] });
    // m.removeComment({ text: 'BLOCK!', commentId: 2 });
    // m.addComment({ text: 'LOOL' });
    Auth.isSignedIn()
    .then(isSignedIn => {
      console.log("debug isSignedIn", isSignedIn);
      this.setState({
        isLoading: false,
        isAuthentified: isSignedIn,
      });
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
          />
        </View>
      );
    }
    if (this.state.isAuthentified) {
      return (
        <Main
          user={this.state.user}
          onLogout={() => {
            Auth.signout();
            this.setState({ isAuthentified: false });
          }}
        />
      );
    }
    return (
      <Signin onLogin={() => this.setState({ isAuthentified: true })} />
    );
  }
}

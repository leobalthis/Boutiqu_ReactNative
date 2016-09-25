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
    this.setState({
      isLoading: false,
      isAuthentified: true,
      user: null
    });
    // Auth.signin()
    // .then(({ payload }) => {
    //   this.setState({
    //     isLoading: false,
    //     isAuthentified: true,
    //     user: payload
    //   });
    // });
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
            this.setState({ isAuthentified: false });
          }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Signin onLogin={data => {
          console.log('debug', data);
          this.setState({ isAuthentified: true });
        }}
        />
      </View>
    );
  }
}

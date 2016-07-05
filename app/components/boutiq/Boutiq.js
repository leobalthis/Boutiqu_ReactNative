import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { AccessToken } from 'react-native-fbsdk';
import { Main } from './Main';
import { Auth } from './Auth';

export class Boutiq extends Component {
  state = {
    isLoading: true,
    isAuthentified: false,
  }
  componentWillMount() {
    AccessToken.getCurrentAccessToken().then((data)=>{
      let newstate = {}
      if(data != null) {
        newstate.isAuthentified = true;
        newstate.user = data;
      }
      this.setState(Object.assign({
        isLoading: false,
      }, newstate))
    });
  }
  render() {
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
          />
        </View>
      );
    }
    if(this.state.isAuthentified) {
      return (
        <Main
          user={this.state.user}
          onLogout={()=>{
            this.setState({isAuthentified: false});
          }} />
      )
    }
    return (
      <View style={styles.container}>
        <Auth onLogin={(data)=>{
          console.log("debug", data);
          this.setState({isAuthentified: true});
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

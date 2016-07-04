import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Boutiq extends Component {
  _leftBtn() {
    return <TouchableHighlight onPress={()=>{
      console.log("debug", this, arguments);
    }} style={{
      justifyContent: "center",
      padding: 10,
    }}>
      <Icon name="bars" size={20} color="#000" />
    </TouchableHighlight>
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{title: "Boutiq"}}
          leftButton={this._leftBtn()} />
        <Text style={styles.welcome}>
          Salut Remi & Louis
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

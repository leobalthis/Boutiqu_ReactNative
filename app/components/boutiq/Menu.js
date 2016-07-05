import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image,
} from 'react-native';

import {
	LoginManager,
} from 'react-native-fbsdk';

export class Menu extends Component {
  static propTypes = {
    onLogout: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <View style={styles.wrapper}>
        {/*<Image
          style={{
            height: 150,
          }}
          source={{uri: this.state.url}}></Image>*/}
        <TouchableHighlight onPress={()=>{
          LoginManager.logOut();
          this.props.onLogout();
        }}>
          <Text>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 20,
  },
});

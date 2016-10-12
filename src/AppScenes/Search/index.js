import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
  SearchInput,
} from 'AppComponents';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navigation: {
    backgroundColor: Styles.COLOR_GREEN
  },
  buttonAround: {
    height: 45,
    width: 130,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: Styles.COLOR_LIGHTER_5
  },
  textAround: {
    fontSize: 22,
    fontWeight: '600',
    color: Styles.COLOR_DARKER_30
  }
});

const leftButtonConfig = {
  title: '< Back',
  tintColor: Styles.COLOR_DARKER_30,
  handler: () => this.props.navigator.pop(),
};

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(text) {
    this.setState({
      searchText: text
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <NavigationBar
          style={styles.navigation}
          tintColor={Styles.COLOR_GREEN}
          leftButton={leftButtonConfig}
        />
        <SearchInput
          styleContainer={{ marginTop: 20, backgroundColor: '#fff', marginBottom: 30 }}
          handleTextInput={this.handleTextInput}
          placeholder="Where are you searching?"
        />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <TouchableOpacity style={styles.buttonAround}>
            <Text style={styles.textAround}>
              Around me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
  Search
} from 'AppComponents';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start'
  },
  navigation: {
    backgroundColor: Styles.COLOR_GREEN
  },
  ViewButtonAround: {
    position: 'absolute',
    top: 100,
    backgroundColor: '#fff',
  },
  buttonAround: {
    height: 45,
    width: 130,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Styles.COLOR_LIGHTER_5
  },
  textAround: {
    fontSize: 22,
    fontWeight: '600',
    color: Styles.COLOR_DARKER_30
  }
});

// const leftButtonConfig = {
//   title: '< Back',
//   tintColor: Styles.COLOR_DARKER_30,
//   handler: () => this.props.navigator.pop(),
// };

export class SearchScene extends Component {
  static propTypes = {
    changeView: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      dataPlace: null,
      detailsPlace: null
    };
    this.getPlace = this.getPlace.bind(this);
  }

  getPlace(data, details) {
    this.setState({
      dataPlace: data,
      detailsPlace: details
    });
    this.props.changeView('searchresult');
    // probably have to pass a part of dataplace/details place
  }

  goToSearchResult() {
    this.props.changeView('searchresult');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {/* <NavigationBar
          style={styles.navigation}
          tintColor={Styles.COLOR_GREEN}
          leftButton={leftButtonConfig}
        /> */}
        <Search
          placeholder="Where are you searching ?"
          getPlace={this.getPlace}
        />
        <View style={styles.ViewButtonAround}>
          <TouchableOpacity
            style={styles.buttonAround}
            onPress={() => {
              this.goToSearchResult();
            }}
          >
            <Text style={styles.textAround}>
              Around me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

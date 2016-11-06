import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Communications from 'react-native-communications';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  },
  navigation: {
    backgroundColor: Styles.COLOR_GREEN,
    marginTop: - 20,
  },
  wrapperHeader: {
    height: 80,
    // borderWidth: 1,
    // borderColor: 'black',
    backgroundColor: Styles.COLOR_GREEN,
    justifyContent: 'center'
  },
  headerLetsTalk: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: x - 40,
    height: 40,
  },
  wrapperContent: {
    flex: 1,
    padding: 25,
    // backgroundColor: 'blue'
  },
  textContent: {
    fontSize: 19,
    lineHeight: 30,
    color: Styles.FONT_COLOR,
  },
  emailLink: {
    fontSize: 25,
    fontWeight: '700',
  },
  termLink: {
    fontWeight: '700',
  },
  line: {
    height: 1,
    marginLeft: -25,
    backgroundColor: Styles.COLOR_DARKER_15,
    width: 150,
    marginBottom: 25,
    marginTop: 15,
  }
});

const leftButtonConfig = {
  title: '< Back',
  tintColor: Styles.FONT_COLOR,
  handler: () => props.navigator.resetTo({
    id: 'home'
  }),
};

export const Contact = (props) => (
  <View style={styles.container}>
    {console.log(props)}
    <NavigationBar
      style={styles.navigation}
      tintColor="#fff"
      leftButton={{
        title: '< Back',
        tintColor: Styles.FONT_COLOR,
        handler: () => props.navigator.resetTo({
          id: 'home'
        })
      }}
    />
  <View style={ styles.wrapperHeader }>
      <TouchableOpacity
        style={styles.headerLetsTalk}
        disabled={true}
      >
        <Text style={{ color: Styles.COLOR_DARKER_15, fontSize: 25 }}>
          Let's talk
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.wrapperContent}>
      <View style={{ marginBottom: 25 }}>
        <Text style={styles.textContent}>We'd love to hear from you!</Text>
        <Text style={styles.textContent}>Questions, feedback, you name it.</Text>
        <Text style={styles.textContent}>Reach us on:</Text>
      </View>
      <Text
        style={[styles.textContent, styles.emailLink]}
        onPress={() => {
          Communications.email(
              ['discover@boutiq.travel'], null, null, null, null
            );
        }}
      >
        discover@boutiq.travel
      </Text>
      <View style={styles.line} />
      <View>
        <Text
          onPress={() => {
            Communications.web('https://boutiq-travel.herokuapp.com/');
          }}
          style={[styles.textContent, styles.termLink]}
        >
          Terms and Conditions
        </Text>
        <Text
          onPress={() => {
            Communications.web('https://boutiq-travel.herokuapp.com/');
          }}
          style={[styles.textContent, styles.termLink]}
        >
          Privacy Policy
        </Text>
      </View>
    </View>
  </View>
);

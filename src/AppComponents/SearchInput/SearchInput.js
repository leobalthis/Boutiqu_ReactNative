import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Styles, x } from 'AppStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    // marginRight: 10,
    backgroundColor: Styles.COLOR_LIGHTER_0,
    width: x - 30,
  },
  input: {
    fontSize: 20,
    color: Styles.COLOR_DARKER_45,
    height: 40,
    padding: 5,
    alignSelf: 'center',
    width: x - 70,
    backgroundColor: Styles.COLOR_LIGHTER_0
  },
});

export const SearchInput = ({ styleContainer, iconName, handleTextInput }) => (
  <View style={[styles.container, styleContainer]}>
    <Icon name={iconName} size={24} color={Styles.COLOR_DARKER_15} />
    <TextInput
      style={styles.input}
      placeholder="Search"
      onChangeText={(text) => {handleTextInput(text)}}
    />
  </View>
);

SearchInput.propTypes = {
  styleContainer: PropTypes.object,
  iconName: PropTypes.string,
  handleTextInput: PropTypes.func
};
SearchInput.defaultProps = {
  iconName: 'search'
};

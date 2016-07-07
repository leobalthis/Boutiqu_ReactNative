import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import Styles from './Styles';

export const MenuNav = ({changeView, routeId, label}) => {
  return (
    <TouchableHighlight style={{padding: 5}}
      onPress={()=> {
        changeView(routeId)
      }}>
      <Text style={styles.menuItem}>
      { (()=>{
        if(label){
          return label
        }else{
          return routeId.toUpperCase()
        }
      })() }
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  menuItem: {
    fontSize: Styles.FONT_SIZE_TITLE,
    color: '#333',
    fontWeight: '500',
  },
});

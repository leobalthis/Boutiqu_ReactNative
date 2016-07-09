import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

export const MenuNav = ({changeView, routeId, label, icon}) => {
  return (
    <TouchableHighlight style={{padding: 5}}
      onPress={()=> {
        changeView(routeId)
      }}>
      <Text style={styles.menuItem}>
      <Icon name={icon} style={styles.icon}/>
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
    color: Styles.FONT_COLOR,
    fontWeight: '500',
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_GREEN
  }
});


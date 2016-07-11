import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

export const MenuNav = ({changeView, routeId, label, icon}) => {
  return (
    <TouchableHighlight
      onPress={()=> {
        changeView(routeId)
      }}>
      <View style={styles.wrapper}>
        <Icon name={icon} style={styles.icon}/>
        <Text style={styles.menuItem}>
        { (()=>{
          if(label){
            return label
          }else{
            return routeId.toUpperCase()
          }
        })() }
        </Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding:10,
    borderTopColor: Styles.COLOR_LIGHT_GREY,
    borderTopWidth: 1,
  },
  menuItem: {
    fontSize: Styles.FONT_SIZE_SMALL,
    color: Styles.FONT_COLOR,
    fontWeight: '300',
  },
  icon: {
    alignItems:'center',
    fontSize: 20,
    width: 20,
    marginTop: -3,
    marginRight: 8,
    marginLeft: 5,
    color: Styles.COLOR_GREEN
  }
});


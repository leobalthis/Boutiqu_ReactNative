import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Menu } from './Menu';
import { Home } from './Home';

export class Main extends Component {
  render() {
    const menu = <Menu />
    return (
      <SideMenu
        menu={menu}
        ref="sideMenu">
        <Home openMenu={this._openMenu.bind(this)}/>
      </SideMenu>
    );
  }
  _openMenu(){
    this.refs.sideMenu.openMenu(true);
  }
}

const styles = StyleSheet.create({

});

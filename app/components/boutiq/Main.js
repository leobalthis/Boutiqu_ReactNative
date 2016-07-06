import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Menu } from './Menu';
import { Home } from './Home';
import { MyLikes } from './MyLikes';

export class Main extends Component {
  renderScene(route, nav) {
    switch (route.id) {
      case 'mylikes':
        return <MyLikes
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
      default:
        return <Home
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
    }
  }
  render() {
    const menu           = <Menu
      changeView={this.changeView.bind(this)}
      {...this.props}
    />;
    const initialRouteId = 'Home';
    return (
      <SideMenu
        menu={menu}
        ref="sideMenu">
        <Navigator
            style={{
              flex: 1,
              backgroundColor: '#3a3a48',
            }}
            ref={'navigator'}
            initialRoute={{ id: initialRouteId, }}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
              if (route.sceneConfig) { return route.sceneConfig; }
              return Navigator.SceneConfigs.FloatFromBottom;
            }}
          />
      </SideMenu>
    );
  }
  _openMenu(){
    this.refs.sideMenu.openMenu(true);
  }
  changeView(routeId) {
    this.refs.navigator.resetTo({
      id: routeId,
    });
    this.refs.sideMenu.openMenu(false);
  }
}

const styles = StyleSheet.create({

});

import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';

import { Menu } from './Menu';
import { Home } from './Home';
import { MyLikes } from './MyLikes';
import { MyProfile } from './MyProfile';
import { PostAReview } from './PostAReview';
import Styles from './Styles';

import {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

export class Main extends Component {
  renderScene(route, nav) {
    switch (route.id) {
      case 'myprofile':
        return <MyProfile
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
      case 'mylikes':
        return <MyLikes
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
      case 'postareview':
        return <PostAReview
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
      default:
        return <Home
          navigator={nav}
          openMenu={this._openMenu.bind(this)}/>;
    }
  }
  render() {
    const menu = <Menu
      changeView={this.changeView.bind(this)}
      {...this.props}/>;
    const initialRouteId = 'Home';
    return (
      <SideMenu
        menu={menu}
        ref="sideMenu">
        <Navigator
            style={{
              flex: 1,
              backgroundColor: Styles.COLOR_GREEN,
            }}
            ref={'navigator'}
            initialRoute={{ id: initialRouteId, }}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
              if (route.sceneConfig) { return route.sceneConfig; }
              return Navigator.SceneConfigs.FloatFromBottom;
            }}/>
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

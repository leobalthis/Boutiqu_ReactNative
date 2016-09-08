import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Styles } from 'AppStyles';
import { Menu } from 'AppComponents';
import {
  Home,
  MyProfile,
  MyLikes,
  ReviewCreator,
} from 'AppScenes';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }
  openMenu() {
    this.refs.sideMenu.openMenu(true);
  }
  changeView(routeId) {
    this.refs.navigator.resetTo({
      id: routeId,
    });
    this.refs.sideMenu.openMenu(false);
  }
  renderScene(route, nav) {
    switch (route.id) {
      case 'myprofile':
        return (
          <MyProfile
            navigator={nav}
            openMenu={this.openMenu}
          />
        );
      case 'mylikes':
        return (
          <MyLikes
            navigator={nav}
            openMenu={this.openMenu}
          />
        );
      case 'reviewcreator':
        return (
          <ReviewCreator
            navigator={nav}
            openMenu={this.openMenu}
          />
        );
      // case 'postareview':
      //   return (
      //     <PostAReview
      //       navigator={nav}
      //       openMenu={this.openMenu}
      //     />
      //   );
      default:
        return (
          <Home
            navigator={nav}
            openMenu={this.openMenu}
          />
        );
    }
  }
  render() {
    const menu = (
      <Menu
        changeView={this.changeView}
        {...this.props}
      />
    );
    const initialRouteId = 'home';
    return (
      <SideMenu
        menu={menu}
        ref="sideMenu"
      >
        <Navigator
          style={{
            flex: 1,
            backgroundColor: Styles.COLOR_GREEN,
          }}
          ref={'navigator'}
          initialRoute={{ id: initialRouteId, }}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.sceneConfig) { return route.sceneConfig; }
            return Navigator.SceneConfigs.FloatFromBottom;
          }}
        />
      </SideMenu>
    );
  }
}

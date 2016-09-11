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
    const commonProps = {
      navigator: nav,
      openMenu: this.openMenu,
      changeView: this.changeView
    }
    switch (route.id) {
      case 'myprofile':
        return (
          <MyProfile
            {...commonProps}
          />
        );
      case 'mylikes':
        return (
          <MyLikes
            {...commonProps}
          />
        );
      case 'reviewcreator':
        return (
          <ReviewCreator
            {...commonProps}
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
            {...commonProps}
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

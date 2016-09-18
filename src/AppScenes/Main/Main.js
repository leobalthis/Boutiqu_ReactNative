import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import { Styles } from 'AppStyles';
import {
  Menu,
  NavBarSideMenu,
  Footer,
} from 'AppComponents';
import {
  Home,
  MyProfile,
  MyLikes,
  Search,
  Contact,
  ReviewCreator,
} from 'AppScenes';

import { styles } from './styles';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPageComponent: null,
    };
    this.openMenu = this.openMenu.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }
  openMenu() {
    this.refs.sideMenu.openMenu(true);
  }
  changeView(routeId, data) {
    if (routeId === 'reviewcreator') {
      this.setState({
        fullPageComponent: (
          <ReviewCreator onClose={() => {
            this.setState({ fullPageComponent: null });
          }}
          />
        ),
      });
    } else {
      this.refs.navigator.resetTo({
        id: routeId,
        data,
      });
    }
    this.refs.sideMenu.openMenu(false);
  }
  renderScene(route, nav) {
    const commonProps = {
      navigator: nav,
      openMenu: this.openMenu,
      changeView: this.changeView
    };
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
      case 'search':
        return (
          <Search
            {...commonProps}
          />
        );
      case 'contactus':
        return (
          <Contact
            {...commonProps}
          />
        );
      default:
        return (
          <Home
            {...commonProps}
            {...route.data}
          />
        );
    }
  }
  renderFullPageModal() {
    const { fullPageComponent } = this.state;
    if (fullPageComponent) {
      return (
        <View style={{flex : 1, backgroundColor: 'red'}}>
          {fullPageComponent}
        </View>
      );
    } else {
      return;
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
      <View style={{ flex: 1, }}>
        <SideMenu
          menu={menu}
          ref="sideMenu"
        >
          <NavigationBar
            tintColor={Styles.COLOR_GREEN}
            title={{ title: 'Boutiq' }}
            leftButton={<NavBarSideMenu openMenu={this.openMenu} />}
          />
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
          <Footer changeView={this.changeView} />
        </SideMenu>
        {this.renderFullPageModal()}
      </View>
    );
  }
}

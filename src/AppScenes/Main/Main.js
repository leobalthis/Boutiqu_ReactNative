import React, { Component } from 'react';
import { Navigator, View, Image } from 'react-native';
import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import { Styles, x } from 'AppStyles';
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
  ContactsListScene,
  MemberProfileScene,
  PlaceDetails,
} from 'AppScenes';

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
            {...route.data}
          />
        );
      case 'memberprofile':
        return (
          <MemberProfileScene
            {...commonProps}
            {...route.data}
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
      case 'contactslist':
        return (
          <ContactsListScene
            {...commonProps}
            {...route.data}
          />
        );
      case 'placedetails':
        return (
          <PlaceDetails
            {...commonProps}
            {...route.data}
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
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          {fullPageComponent}
        </View>
      );
    }
    return null;
  }
  render() {
    const menu = (
      <Menu
        changeView={this.changeView}
        {...this.props}
      />
    );
    const initialRouteId = 'contactslist';
    return (
      <View style={{ flex: 1, }}>
        <SideMenu
          menu={menu}
          ref="sideMenu"
        >
          <NavigationBar
            tintColor={Styles.COLOR_GREEN}
            title={
              <Image
                source={require('../../../assets/boutiq_logo@0.5x.png')}
                style={{ width: 180, height: 28, marginRight: x / 5 }}
              />}
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
          <Footer
            user={this.props.user}
            changeView={this.changeView}
          />
        </SideMenu>
        {this.renderFullPageModal()}
      </View>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ListView,
} from 'react-native';
import { styles } from './styles';
import { Styles } from 'AppStyles';
import {
  SearchInput,
  Contact,
} from 'AppComponents';
import { Boutiq } from 'AppServices';

import NavigationBar from 'react-native-navbar';

export class ContactsListScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    contactType: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      inputTextValue: '',
      isLoading: true,
      user: [],
      dataSource: this.ds.cloneWithRows([])
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.saveChangeAndPop = this.saveChangeAndPop.bind(this);
  }

  componentDidMount() {
    const { contactType } = this.props;
    Boutiq.getUserProfile()
    .then(user => {
      this.setState({
        isLoading: false,
        user,
        dataSource: this.ds.cloneWithRows(user[`user_${contactType}`])
      });
    });
  }

  handleTextInput(text) {
    this.setState({
      inputTextValue: text
    });
  }

  saveChangeAndPop() {
    // save following toggle in DB
    this.props.navigator.pop();
  }

  renderListItem(rowData) {
    return (
      <Contact {...rowData}
        user={this.state.user}
        contactType={this.props.contactType}
      />
    );
  }

  renderListView() {
    const { isLoading } = this.state;
    return isLoading
    ? <ActivityIndicator size="large" />
    : <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderListItem.bind(this)}
    />;
  }

  renderNumberContactType(type) {
    const { user_followers, user_followings, user_friends } = this.state.user;
    switch (type) {
      case 'followers':
        return `${user_followers.length} ${user_followers.length < 2 ? 'FOLLOWER' : 'FOLLOWERS'}`;
      case 'followings':
        return `${user_followings.length} ${user_followings.length < 2 ? 'FOLLOWING' : 'FOLLOWINGS'}`;
      case 'friends':
        return `${user_friends.length} ${user_friends.length < 2 ? 'FRIEND' : 'FRIENDS'}`;
      default:
        return null;
    }
  }

  render() {
    const { contactType } = this.props;
    const { isLoading } = this.state;
    const leftButtonConfig = {
      title: '< Back',
      tintColor: Styles.COLOR_DARKER_30,
      handler: () => this.saveChangeAndPop(),
    };
    return (
      <View style={styles.wrapper}>
        <NavigationBar
          style={styles.navigation}
          tintColor="#fff"
          leftButton={leftButtonConfig}
        />
        <SearchInput
          styleContainer={{ marginTop: 20 }}
          handleTextInput={this.handleTextInput}
        />
        <View style={{ padding: 15, marginTop: 10 }}>
          <Text style={{ color: Styles.COLOR_DARKER_15, fontWeight: '600' }}>
            {!isLoading && this.renderNumberContactType(contactType)}
          </Text>
        </View>
        <View>
          {this.renderListView()}
        </View>
      </View>
    );
  }
}

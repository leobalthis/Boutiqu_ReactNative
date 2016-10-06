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
    navigator: PropTypes.object.isRequired
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
  }

  componentDidMount() {
    Boutiq.getUserProfile()
    .then(data => {
      this.setState({
        isLoading: false,
        user: data,
        dataSource: this.ds.cloneWithRows(data.user_followers)
      });
    });
  }

  handleTextInput(text) {
    this.setState({
      inputTextValue: text
    });
  }

  renderListItem(rowData) {
    return <Contact {...rowData} user={this.state.user} />;
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

  render() {
    const { isLoading } = this.state;
    const leftButtonConfig = {
      title: '< Back',
      tintColor: Styles.COLOR_DARKER_30,
      handler: () => this.props.navigator.pop(),
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
            {!isLoading && `${this.state.user.user_followers.length} FOLLOWERS`}
          </Text>
        </View>
        <View>
          {this.renderListView()}
        </View>
      </View>
    );
  }
}

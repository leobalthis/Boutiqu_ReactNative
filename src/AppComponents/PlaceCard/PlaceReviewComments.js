import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	StyleSheet,
	View,
  Image,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  rowWrapper: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    color: Styles.FONT_COLOR,
  },
});

export class PlaceReviewComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.place_liked || false ,
    };
    this.toggleSelection = this.toggleSelection.bind(this);
  }

  toggleSelection() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { liked } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={[styles.rowWrapper, { marginTop: 10 }]}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.toggleSelection}>
              <Icon
                size={22}
                name="check"
                color={liked ? Styles.COLOR_GREEN : Styles.COLOR_LIGHTER_5}
               />
            </TouchableOpacity>
            <Text style={[styles.rowText, { marginLeft: 5 }]}>Like</Text>
          </View>
          <View style={{ flexDirection: 'row', marginRight: 90 }}>
            <Image
              source={require('../../../assets/comment_icon@1x.png')}
              style={{ width: 22, height: 18 }}
            />
          <Text style={[styles.rowText, { marginLeft: 5 }]}>Comment...</Text>
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Icon
                size={20}
                name="ellipsis-h"
                color={Styles.COLOR_DARKER_15}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: x - 30, height: 1, backgroundColor: Styles.COLOR_LIGHTER_5, }} />
        <View style={[styles.rowWrapper, { justifyContent: 'flex-start' }]}>
          <Text style={{ color: Styles.COLOR_DARKER_60 }}>
            999  likes
          </Text>
          <Text style={{ color: Styles.COLOR_DARKER_60, marginLeft: 35 }}>
            {this.props.comments.length}  comments
          </Text>
        </View>
      </View>
    );
  }
}

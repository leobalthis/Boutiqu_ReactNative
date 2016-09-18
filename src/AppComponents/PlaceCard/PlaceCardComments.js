import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Styles } from 'AppStyles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    borderColor: 'red',
    borderWidth: 1, 
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
  },
  iconSelected: {
    fontSize: Styles.FONT_SIZE_TITLE,
    color: Styles.COLOR_GREEN,
    padding: 2,
  },
  iconUnselected: {
    fontSize: Styles.FONT_SIZE_TITLE,
    color: Styles.COLOR_DARKER_15,
    padding: 2,
  },
});

const renderLiked = (liked) => {
  let text;  
  if (liked) {
    text = 'plus-square';
  } else {
    text = 'plus-square-o';
  }
  return text;
};

const renderComments = (comments) => {
  let text;  
  if (comments) {
    text = 'comments';
  } else {
    text = 'comments-o';
  }
  return text;
};

export class PlaceCardComments extends Component {
  constructor(props) {
    super(props);
  
    this.toggleSelection = this.toggleSelection.bind(this);

    this.state = { 
      liked: false || this.props.liked,
    };
    
  }

  toggleSelection() {
    this.setState({ 
      liked: !this.state.liked,
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
      <View style={styles.rowWrapper}>
         <TouchableOpacity
          onPress={this.toggleSelection} >
            <Icon 
            name={ renderLiked(this.state.liked) } 
            style={ (this.state.liked) ? styles.iconSelected : styles.iconUnselected} />
        </TouchableOpacity>
          <Text>
            likes
          </Text>
          <Icon 
            name={ renderComments(this.props.comments) } 
            style={ (this.props.comments) ? styles.iconSelected : styles.iconUnselected} />
          <Text>
            Comments
          </Text>
      </View>      
      <View style={styles.rowWrapper}>
         <TouchableOpacity
          onPress={this.toggleSelection} >
            <Icon 
            name={ renderLiked(this.state.liked) } 
            style={styles.icon} />
        </TouchableOpacity>
          <Text>
            likes
          </Text>
          <Icon 
            name={ renderComments(this.props.comments) } 
            style={styles.icon} />
          <Text>
            Comments
          </Text>
      </View>
      </View>
    );
  }
}


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
    flex: 1,
    flexDirection: 'column',
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: Styles.COLOR_LIGHTER_5,
  },
  likes: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  comments: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconS: {
    color: Styles.COLOR_GREEN,
    fontSize: Styles.FONT_SIZE,
    paddingRight: 3,
  },
  iconSelected: {
    color: Styles.COLOR_GREEN,
  },
  iconUnselected: {
    color: Styles.COLOR_DARKER_15,
  },
  rowText: {
    color: Styles.FONT_COLOR,
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_DARKER_30,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

const renderLiked = (liked) => {
  let text;  
  if (liked) {
    text = 'thumbs-up';
  } else {
    text = 'thumbs-o-up';
  }
  return text;
};

const renderComments = (comments) => {

  let text;  
  if (comments.length > 0) {
    text = 'comment';
  } else {
    text = 'comment-o';
  }
  return text;
};

export class PlaceCardComments extends Component {
  constructor(props) {
    super(props);
  
    this.toggleSelection = this.toggleSelection.bind(this);

    this.state = { 
      liked: false || this.props.place_liked,
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
          <View style={styles.likes}>
             <TouchableOpacity
              onPress={this.toggleSelection} >
            </TouchableOpacity>
              <Text style={styles.rowText}>
                30 likes
              </Text>
          </View>
          <View style={styles.comments}>                
              <Text style={styles.rowText}>
                {(this.props.comments.length > 0) ? this.props.comments.length : 2} Comments
              </Text>
          </View>              
        </View>     
        <View style={styles.rowWrapper}>
          <View style={styles.likes}>
             <TouchableOpacity
              onPress={this.toggleSelection} >
                <Icon 
                name={ renderLiked(this.state.liked) } 
                style={[styles.iconS, ((this.state.liked) ? styles.iconSelected : styles.iconUnselected)]} />
            </TouchableOpacity>
              <Text style={styles.rowText}>
                like
              </Text>
          </View>
          <View style={styles.comments}>
              <Icon 
                name={ renderComments(this.props.comments) } 
                style={[styles.iconS, ((this.props.comments.length > 0) ? styles.iconSelected : styles.iconUnselected)]} />
              <Text style={styles.rowText}>
                Comment
              </Text>
          </View>        
          <View style={styles.comments}>
              <TouchableOpacity>
                <Icon name='ellipsis-h' style={styles.icon}/>
              </TouchableOpacity>
          </View>              
        </View>              
      </View>
    );
  }
}


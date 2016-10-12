import React, { Component, PropTypes } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	StyleSheet,
	View,
  Image,
	TouchableOpacity,
} from 'react-native';
import { ProfilePhoto } from 'AppComponents';
import { Styles, x } from 'AppStyles';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Styles.COLOR_DARKER_30,
    width: x,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  viewShadow: {
    marginBottom: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: 68,
    height: 68,
    borderRadius: 48,
    shadowColor: Styles.COLOR_NORMAL_GREY,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 0
    }
  },
  btn: {
    width: 30,
    height: 30,
  },
  plusBtn: {
    width: 70,
    height: 70,
  }
});

export class Footer extends Component {
  static propTypes = {
    changeView: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  render() {
    return (
			<View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.changeView('home', { index: 0 })}
        >
          <Image
            style={styles.btn}
            source={require('../../../assets/home_icon@1x.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.changeView('search')}
        >
          <Image
            style={styles.btn}
            source={require('../../../assets/search_icon@1x.png')}
          />
        </TouchableOpacity>
        <View style={styles.viewShadow}>
        <TouchableOpacity
          onPress={() => this.props.changeView('reviewcreator')}
        >
          <Image
            style={styles.plusBtn}
            source={require('../../../assets/post_btn@1x.png')}
          />
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.changeView('home', { index: 1 })}
        >
					<Icon name="heart-o" size={30} color={Styles.COLOR_DARKER_30} />
				</TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.changeView('myprofile', { user: this.props.user })}
        >
          <ProfilePhoto type="circle" size={30} border={true} />
        </TouchableOpacity>
			</View>
		);
  }
}

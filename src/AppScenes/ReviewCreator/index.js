import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
  MapView,
  TextInput,
  Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import {
	Tags,
  PhotoFrame,
  CameraButton,
	Rate,
} from 'AppComponents';
import { imagePicker } from 'AppServices';

import { Styles } from 'AppStyles';
import { styles } from './styles';

export class ReviewCreator extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      tags: [],
      rating: null,
      review: '',
      imagePlace: null,
    };
    this.tagSelection = null;
    this.selectImage = this.selectImage.bind(this);
    this.setSource = this.setSource.bind(this);
    this.buildReview = this.buildReview.bind(this);
    this.onCloseFrame = this.onCloseFrame.bind(this);
  }

  onCloseFrame() {
    this.setState({
      imagePlace: null
    });
  }

  setSource(imagePlace) {
    this.setState({ imagePlace });
  }

  buildReview() {
    console.log('placeName', this.state.placeName);
    console.log('tags', this.tagSelection.getSelectedTags());
    console.log('rate', this.rateSelection.state);
    console.log('review', this.state.review);
    console.log('imagePlace', this.state.imagePlace);
  }

  selectImage() {
    imagePicker.show()
      .then(({ type, source }) => {
        if (!type) {
          this.setSource(source);
        }
      })
      .catch(() => {console.log('pb with camera picker');});
  }

  render() {
    const { onClose, back } = this.props;
    const { imagePlace } = this.state;
    return (
			<View style={styles.wrapper}>
        <NavigationBar
          tintColor={Styles.COLOR_GREEN}
          title={{ title: 'Post a Review' }}
          leftButton={{
            title: '< Back',
            tintColor: Styles.COLOR_DARKER_60,
            handler: onClose,
          }}
        />
        <ScrollView
          style={{ flex: 1, padding: 10 }}
        >
          <View style={styles.wrapperContent}>
            <View style={styles.wrapperMap}>
              <MapView
                style={styles.map}
                region={{
                  latitude: -33.865143,
                  longitude: 151.209900,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              />
            </View>
            <TextInput
              placeholder="Type in the place's Name"
              onChangeText={placeName => {this.setState({ placeName });}}
              style={styles.placeTextInput}
            />
            <Tags
              ref={e => this.tagSelection = e}
              tagsLabel="Tags"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ color: Styles.FONT_COLOR }}>Your rating</Text>
              <Rate
                ref={e => this.rateSelection = e}
                rateLabel={true}
              />
            </View>
              <TextInput
                multiline={true}
                style={styles.reviewTextInput}
                returnKeyType="done"
                blurOnSubmit={true}
                placeholder="Write a review"
                onChangeText={review => {this.setState({ review });}}
              />
            <CameraButton
              containerStyle={{ alignSelf: 'center', marginTop: - 30 }}
              openCameraPicker={this.selectImage}
            />
            {imagePlace &&
            <PhotoFrame
              open={imagePlace}
              closeFrame={this.onCloseFrame}
            >
              <Image
                style={{ flex: 1 }}
                resizeMode="cover"
                source={{ uri: imagePlace.uri }}
              />
            </PhotoFrame>}
            <View style={styles.wrapperSocialMedia}>
              <Text style={{ color: Styles.FONT_COLOR }}>Share on:</Text>
              <Image
                style={styles.imageSocial}
                source={require('../../../assets/fb_checkbox@1x.png')}
              />
            </View>
          </View>
				</ScrollView>
        <TouchableOpacity onPress={() => {
          this.buildReview();
        }}
        >
					<Text style={styles.postBtn}>POST YOUR REVIEW NOW</Text>
				</TouchableOpacity>
			</View>
		);
  }
}

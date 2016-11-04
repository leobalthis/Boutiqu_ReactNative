import React, { Component, PropTypes } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';

export class Onboarding extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.onDismiss = this.onDismiss.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onDismiss() {
    this.props.onDismiss();
  }
  onSubmit() {
    this.props.onSubmit({
      location: this.location._lastNativeText,
      email: this.email._lastNativeText
    });
  }
  render() {
    return (
      <Image
        style={styles.wrappingImage}
        source={require('../../../assets/onboarding_info.png')}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.buttonSkip}
            onPress={this.onDismiss}
          >
            <Text style={styles.buttonSkipText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.form}>
            <Text style={styles.textIntro}>
              Boutiq can help you discover great places just for you
            </Text>
            <TextInput
              style={styles.inputText}
              ref={e => this.location = e}
              placeholder="City where you live"
              autoCorrect={false}
              autoFocus={true}
              onSubmitEditing={() => this.email.focus()}
            />
            <TextInput
              style={styles.inputText}
              keyboardType="email-address"
              ref={e => this.email = e}
              placeholder="Your email address"
              autoCorrect={false}
              onSubmitEditing={this.onSubmit}
            />
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={this.onSubmit}
            >
              <Text style={styles.buttonSubmitText}>Let's start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
};

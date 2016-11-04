import React from 'react';
import {
  Image,
  Text,
} from 'react-native';
import { styles } from './styles';

export const RememberSlide = () => (
  <Image
    style={styles.wrappingImage}
    source={require('../../../assets/bg_signup3.png')}
  >
    <Text style={styles.slidesTitle}>
      Remember
    </Text>
    <Text style={styles.slidesLegend}>
      experiences you
    </Text>
    <Text style={styles.slidesLegend}>
      don’t want to forget
    </Text>
    <Text style={styles.slidesParagraph}>
      Save places you love and share these with your friends and network
    </Text>
  </Image>
);

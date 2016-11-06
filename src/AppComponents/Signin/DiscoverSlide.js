import React from 'react';
import {
  Image,
  Text,
} from 'react-native';
import { styles } from './styles';

export const DiscoverSlide = () => (
  <Image
    style={styles.wrappingImage}
    source={require('../../../assets/bg_signup1.jpg')}
  >
    <Text style={styles.slidesTitle}>
      Discover
    </Text>
    <Text style={styles.slidesLegend}>
      great places at home
    </Text>
    <Text style={styles.slidesLegend}>
      and when you travel
    </Text>
    <Text style={styles.slidesParagraph}>
      Boutiq helps you find the best spots in town or those hidden gems abroad
    </Text>
  </Image>
);

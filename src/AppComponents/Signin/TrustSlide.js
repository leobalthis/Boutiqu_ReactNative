import React from 'react';
import {
  Image,
  Text,
} from 'react-native';
import { styles } from './styles';

export const TrustSlide = () => (
  <Image
    style={styles.wrappingImage}
    source={require('../../../assets/bg_signup2.png')}
  >
    <Text style={styles.slidesTitle}>
      Trust
    </Text>
    <Text style={styles.slidesLegend}>
      reviews made by your
    </Text>
    <Text style={styles.slidesLegend}>
      friends and network
    </Text>
    <Text style={styles.slidesParagraph}>
      Browse through places recommended by people you can identify
    </Text>
  </Image>
);

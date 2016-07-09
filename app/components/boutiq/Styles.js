import React from 'react-native';
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

const COLOR_DARK_GREY = '#545454';
// We add an em() shortcut function
function em(value) {
  return unit * value;
}


// Then we set our styles with the help of the em() function
export default Styles = {

  // GENERAL
  DEVICE_WIDTH:       x,
  DEVICE_HEIGHT:      y,
  RATIO_X:            ratioX,
  RATIO_Y:            ratioY,
  UNIT:               em(1),
  PADDING:            em(1.25),

  // CARD
  CARD_WIDTH:         x - em(1.25) * 2,
  CARD_HEIGHT:        (x - em(1.25) * 2) * (3/5),
  CARD_PADDING_X:     em(1.875),
  CARD_PADDING_Y:     em(1.25),

  //COLORS
  COLOR_GREY:         '#C7C7C7',
  COLOR_LIGHT_GREY:   '#FFF',
  COLOR_GREEN:        '#50D2C2',
  COLOR_PINK:         '#FF3366',
  COLOR_WHITE:        '#FFF',

  // FONT
  FONT_SIZE:          em(1),
  FONT_SIZE_SMALLER:  em(0.75),
  FONT_SIZE_SMALL:    em(0.875),
  FONT_SIZE_TITLE:    em(1.25),
  
  FONT_COLOR:         COLOR_DARK_GREY,

};

import { StyleSheet } from 'react-native';
import { Styles, x } from 'AppStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: 65,
    width: x,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: Styles.COLOR_DARKER_15,
  }
});

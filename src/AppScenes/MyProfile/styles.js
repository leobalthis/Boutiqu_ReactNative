import { StyleSheet } from 'react-native';
import { Styles } from 'AppStyles';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Styles.COLOR_WHITE,
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_WHITE
  },
  profileWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    height: 180,
  },
  proleft: {
    width: 100,
    alignItems: 'center',
  },
  proleftText: {
    fontSize: 12,
    color: Styles.COLOR_DARKER_45,
    textAlign: 'center',
    marginTop: 14,
  },
  proRight: {
    flex: 1,
    padding: 10,
  },
  proRightText: {
    color: Styles.COLOR_DARKER_60,
    fontSize: 14,
  },
  proRightTextName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  proRightTextLocation: {
    color: Styles.COLOR_DARKER_30,
  },
  proRightTextProfileType: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: Styles.COLOR_DARKER_45,
  },
  proRightTextProfileTypeInfo: {
    color: Styles.COLOR_DARKER_45,
    fontSize: 10,
    textAlign: 'justify',
  },
  profileFollowers: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    height: 70,
  },
});

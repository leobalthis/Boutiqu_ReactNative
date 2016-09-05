import { StyleSheet } from 'react-native';
import { Styles } from 'AppStyles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Styles.COLOR_WHITE,
    paddingTop: 20,
    borderRightWidth: 1,
    borderColor: Styles.COLOR_LIGHTER_5,
  },
  logoutWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
    borderBottomColor: Styles.COLOR_LIGHTER_5,
    borderBottomWidth: 1,
    borderTopColor: Styles.COLOR_LIGHTER_5,
    borderTopWidth: 1,
  },
  logOut: {
    fontSize: Styles.FONT_SIZE_SMALL,
    color: Styles.FONT_COLOR,
    fontWeight: '300',
  },
  icon: {
    fontSize: 20,
    width: 20,
    marginTop: -3,
    marginRight: 8,
    marginLeft: 30,
    color: Styles.COLOR_GREEN
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileTextWrapper: {
    padding: 5,
  },
  profileTextUser: {
    fontSize: Styles.FONT_SIZE,
    color: Styles.FONT_COLOR,
    fontWeight: '500',
    marginLeft: 10,
  },
  profileText: {
    fontSize: Styles.FONT_SIZE_SMALLER,
    color: Styles.FONT_COLOR,
    fontWeight: '300',
    marginLeft: 10,
  }
});

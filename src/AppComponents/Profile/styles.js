import { StyleSheet } from 'react-native';
import { Styles } from 'AppStyles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Styles.COLOR_WHITE,
  },
  icon: {
    fontSize: 20,
    color: Styles.COLOR_WHITE
  },
  profileWrapper: {
    flexDirection: 'row',
    padding: 10,
    height: 200,
  },
  proleft: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  proleftText: {
    fontSize: 12,
    color: Styles.COLOR_BLUE,
    textAlign: 'center',
    marginTop: 14,
  },
  proRight: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  ViewFollowButton: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  followButton: {
    width: 130,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Styles.COLOR_PINK
  },
  textFollowButton: {
    color: Styles.COLOR_PINK
  },
  wrapperProStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  switch: {
    marginTop: 10,
    width: 55,
    height: 35,
  },
  proRightTextName: {
    color: Styles.COLOR_DARKER_60,
    fontSize: 20,
    fontWeight: 'bold',
  },
  proRightTextLocation: {
    color: Styles.COLOR_DARKER_30,
    fontSize: 14,
  },
  proRightTextProfileType: {
    fontSize: 14,
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
  hLine: {
    height: 23,
    alignSelf: 'center',
    width: 1,
    backgroundColor: Styles.COLOR_DARKER_15
  },
  profileFollowers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
});

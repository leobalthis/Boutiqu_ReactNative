import { StyleSheet } from 'react-native';
import { Styles } from 'AppStyles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Styles.COLOR_WHITE,
  },
	postBtn: {
		padding: 15,
		marginTop: 10,
		textAlign: 'center',
		color: Styles.COLOR_WHITE,
    	backgroundColor: Styles.COLOR_GREEN,
	},
});

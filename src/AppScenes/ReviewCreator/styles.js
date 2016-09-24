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
	reviewLabel: {
		padding: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: Styles.COLOR_DARKER_60,
	}
});

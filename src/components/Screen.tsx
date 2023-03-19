import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';


interface Props {
	children: React.ReactNode;
}

const Screen: React.FC<Props> = ({ children }) => {
	return (
		<View style={styles.container}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// if os android add padding top to avoid status bar overlap with content 
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	}
});

export default Screen;
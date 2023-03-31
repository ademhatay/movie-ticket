import React, { useCallback, useMemo, useRef } from 'react';
import TabNavigator from './src/routes/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Provider from './src/contexts/GeneralContext';
import BottomSheet from '@gorhom/bottom-sheet';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const App = () => {


	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ['25%', '50%'], []);


	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);


	return (
		<View style={{ backgroundColor: 'red', flex: 1 }}>
			<Provider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					{/* <NavigationContainer>
					<TabNavigator />
				</NavigationContainer> */}
					<BottomSheet
						ref={bottomSheetRef}
						index={1}
						snapPoints={snapPoints}
						onChange={handleSheetChanges}
						enablePanDownToClose={true}
					>
						<View style={styles.contentContainer}>
							<Text>Awesome 🎉</Text>
						</View>
					</BottomSheet>
				</GestureHandlerRootView>
			</Provider>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: 'grey',
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
	},
});

export default App;

import React from 'react';
import TabNavigator from './src/routes/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Provider from './src/contexts/GeneralContext';

const App = () => {

	return (
		<Provider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer>
					<TabNavigator />
				</NavigationContainer>
			</GestureHandlerRootView>
		</Provider>
	);
};

export default App;

import React from 'react';
import TabNavigator from './src/routes/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
	return (
		<>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</>
	);
};

export default App;

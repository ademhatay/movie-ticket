import React from 'react';
import TabNavigator from './src/routes/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {

	const [visible, setVisible] = React.useState(true);

	return (
		<>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</>
	);
};

export default App;

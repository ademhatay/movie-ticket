import React from 'react';
import { View, Text,  } from 'react-native';
import { CategoryList, ComingSoon, Screen, Tabs } from '../components';

const HomeScreen: React.FC = () => {
	return <>
		<Screen>
			<Tabs />
			<ComingSoon />
			<CategoryList />
		</Screen>
	</>
}



export default HomeScreen;
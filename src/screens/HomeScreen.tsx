import React from 'react';
import { View, Text,  } from 'react-native';
import { ComingSoon, Screen, Tabs } from '../components';

const HomeScreen: React.FC = () => {
	return <>
		<Screen>
			<Tabs />
			<ComingSoon />
		</Screen>
	</>
}



export default HomeScreen;
import React from 'react';
import { CategoryList, ComingSoon, NowShowing, Screen, Tabs } from '../components';

const HomeScreen: React.FC = () => {
	return <>
		<Screen>
			<Tabs />
			<ComingSoon />
			<CategoryList />
			<NowShowing />
		</Screen>
	</>
}



export default HomeScreen;
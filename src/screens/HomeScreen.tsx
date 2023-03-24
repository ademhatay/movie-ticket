import React from 'react';
import { CategoryList, ComingSoon, NowShowing, Screen } from '../components';

const HomeScreen: React.FC = () => {
	return <>
		<Screen>
			<ComingSoon />
			<CategoryList />
			<NowShowing />
		</Screen>
	</>
}



export default HomeScreen;
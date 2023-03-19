import React from 'react';
import { View, Text } from 'react-native';
import FeaturedCard from './FeaturedCard';
import SectionTitle from './SectionTitle';

const ComingSoon: React.FC = () => {
	return <>
		<View className='px-8 pt-8'>
			<SectionTitle
				title="Coming Soon"
			/>
			<FeaturedCard
				image='https://i.insider.com/62225ce7dcce010019a6def1?width=800&format=jpeg&auto=webp'
				name="The Batman"
				avaliable
			/>
		</View>
	</>
};


export default ComingSoon;
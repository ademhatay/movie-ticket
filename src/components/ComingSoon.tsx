import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { width } from '../config/constants';
import FeaturedCard from './FeaturedCard';
import SectionTitle from './SectionTitle';


type movieData = {
	id: number;
	name: string;
	image: string;
	avaliable: boolean;
}

const movies: movieData[] = [
	{
		id: 1,
		name: 'The Batman',
		image: 'https://i.insider.com/62225ce7dcce010019a6def1?width=800&format=jpeg&auto=webp',
		avaliable: true
	},
	{
		id: 2,
		name: 'Avatar 2',
		image: 'https://tr.web.img4.acsta.net/pictures/22/12/12/07/34/4691827.jpg',
		avaliable: false
	},
	{
		id: 3,
		name: 'San Andreas',
		image: 'https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmRmYi00NzgzLTllNmUtNDQwZDAxMmE3NzI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		avaliable: true,
	}
];

		

const ComingSoon: React.FC = () => {
	return <>
		<View className='px-8'>
			<SectionTitle
				title="Coming Soon"
			/>
			<FlatList
				data={movies}
				renderItem={({ item }) => <FeaturedCard
					name={item.name}
					image={item.image}
					avaliable={item.avaliable}
				/>}
				keyExtractor={item => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View className='w-10' />}
				snapToInterval={width - 150}
			/>
		</View>
	</>
};


export default ComingSoon;
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { width } from '../config/constants';
import FeaturedCard from './FeaturedCard';
import SectionTitle from './SectionTitle';
import AppModal from './AppModal';
import { useGeneralContext } from '../contexts/GeneralContext';


type movieData = {
	id: number;
	title: string;
	poster_path: string;
	rating: number;
	tags: string[];
	avaliable: boolean;
}

const movies: movieData[] = [
	{
		id: 1,
		title: 'The Batman',
		poster_path: 'https://i.insider.com/62225ce7dcce010019a6def1?width=800&format=jpeg&auto=webp',
		avaliable: true,
		tags: ['Action', 'Adventure', 'Crime'],
		rating: 8.7
	},
	{
		id: 2,
		title: 'Avatar 2',
		poster_path: 'https://tr.web.img4.acsta.net/pictures/22/12/12/07/34/4691827.jpg',
		avaliable: false,
		tags: ['Action', 'Adventure', 'Fantasy'],
		rating: 8.7
	},
	{
		id: 3,
		title: 'San Andreas',
		poster_path: 'https://m.media-amazon.com/images/M/MV5BNzZhYmQ2NGMtZmRmYi00NzgzLTllNmUtNDQwZDAxMmE3NzI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
		avaliable: true,
		tags: ['Action', 'Adventure', 'Drama'],
		rating: 8.7
	}
];



const ComingSoon: React.FC = () => {
	const { showModal, setShowModal, item, setItem } = useGeneralContext();

	const onPress = (item: movieData) => {
		setItem(item);

		setShowModal(true);
	}

	return <>
		<View className='px-8'>
			<SectionTitle
				title="Coming Soon"
			/>
			<FlatList
				data={movies}
				renderItem={({ item }) => <FeaturedCard
					onPress={() => onPress(item)}
					name={item.title}
					image={item.poster_path}
					avaliable={item.avaliable}
				/>}
				keyExtractor={item => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View className='w-10' />}
				snapToInterval={width - 150}
			/>
		</View>
		<AppModal visible={showModal} item={item} onClose={() => setShowModal(false)} />
	</>
};


export default ComingSoon;
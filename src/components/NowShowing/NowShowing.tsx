import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import SectionTitle from "../SectionTitle";
import { useGeneralContext } from "../../contexts/GeneralContext";
import AppModal from "../AppModal";


const { width } = Dimensions.get('window');
const wither = width / 1.2;
const ITEM_WIDTH = wither

type movieData = {
	id: number;
	title: string;
	poster_path: string;
	rating: number;
	tags: string[];
	avaliable: boolean;
};

const movies: movieData[] = [
	{
		id: 1,
		title: "SpiderMan: Far From Home",
		poster_path: "https://image.tmdb.org/t/p/w500/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
		rating: 7.5,
		tags: ["Action", "Adventure", "Science Fiction"],
		avaliable: true,
	},
	{
		id: 2,
		title: "Lion King",
		poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
		rating: 7.1,
		tags: ["Adventure", "Animation", "Drama"],
		avaliable: false,
	},
	{
		id: 3,
		title: "SpiderMan: Homecoming",
		poster_path: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
		rating: 7.4,
		tags: ["Action", "Adventure", "Science Fiction"],
		avaliable: true,
	},
	{
		id: 4,
		title: "The Lord of the Rings: The Two Towers",
		poster_path: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
		rating: 8.7,
		tags: ["Adventure", "Drama", "Fantasy"],
		avaliable: true,
	},
];




const NowShowing: React.FC = () => {

	const { showModal, setShowModal, item, setItem } = useGeneralContext();


	const renderItem = ({ item }: { item: movieData }) => {

		const onPress = () => {
			setItem(item);

			setShowModal(true);
		};

		return <>
			<View className="flex-col">
				<TouchableOpacity
					onPress={onPress}
					className="items-center">
					<Image
						resizeMode="cover"
						className="w-32 h-56 rounded-lg"
						source={{ uri: item.poster_path }}
					/>


					<View className="justify-center items-center">
						<Text className="text-white font-barlow-medium text-base">
							{
								item.title.length > 15
									? item.title.substring(0, 15) + "..."
									: item.title
							}
						</Text>
						<View className="flex-row mt-1">
							<Text
								className="text-white mx-2 font-barlow-normal bg-tags p-1 rounded-md"
							>
								{item?.tags[0]}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</>
	};


	return <>
		<View className="mx-8">
			<SectionTitle title="Now Showing" />
			<FlatList
				horizontal
				data={movies}
				renderItem={renderItem}
				snapToInterval={ITEM_WIDTH}
				keyExtractor={(item) => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={() => <View className="w-8" />}
			/>
		</View>

		<AppModal visible={showModal} item={item} onClose={() => setShowModal(false)} />
	</>
};

export default NowShowing;

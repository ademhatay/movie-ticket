import React, { useRef, useState, useMemo } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import SectionTitle from "../SectionTitle";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get('window');
const wither = width / 1.2;
const ITEM_WIDTH = wither

type Movie = {
	id: number;
	title: string;
	poster_path: string;
	rating: number;
	tags: string[];
};

const movies: Movie[] = [
	{
		id: 1,
		title: "SpiderMan: Far From Home",
		poster_path: "https://image.tmdb.org/t/p/w500/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
		rating: 7.5,
		tags: ["Action", "Adventure", "Science Fiction"],
	},
	{
		id: 2,
		title: "Lion King",
		poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
		rating: 7.1,
		tags: ["Adventure", "Animation", "Drama"],
	},
	{
		id: 3,
		title: "SpiderMan: Homecoming",
		poster_path: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
		rating: 7.4,
		tags: ["Action", "Adventure", "Science Fiction"],
	},
	{
		id: 4,
		title: "The Lord of the Rings: The Two Towers",
		poster_path: "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
		rating: 8.7,
		tags: ["Adventure", "Drama", "Fantasy"],
	},
];


const NowShowing: React.FC = () => {

	const [index, setIndex] = useState<number>(0);
	const flatListRef = useRef<any>(null);

	const handleScroll = event => {
		const xOffset = event.nativeEvent.contentOffset.x + 1;
		const index = Math.floor(xOffset / ITEM_WIDTH);
		if (index !== index) {
			setIndex(index);
		}
		setIndex(index);
	};

	const scrollToIndex = index => {
		flatListRef.current?.scrollToIndex({ animated: true, index });
		setIndex(index);
	};

	const renderItem = ({ item }: { item: Movie }) => {
		return (
			<TouchableOpacity onPress={() => setIndex(item?.id - 1)} style={{ width: wither }} className="items-center">
				<Image resizeMode="cover" className="w-32 h-56 rounded-lg" source={{ uri: item.poster_path }} />
			</TouchableOpacity>
		);
	};

	const scrollNext = () => {
		if (index < movies.length - 1) {
			scrollToIndex(index + 1);
		}
	};

	const scrollPrev = () => {
		if (index > 0) {
			scrollToIndex(index - 1);
		}
	};

	return <>
		<View className="mx-8">
			<SectionTitle title="Now Showing" />
			<FlatList
				ref={flatListRef}
				horizontal
				data={movies}
				renderItem={renderItem}
				onScroll={handleScroll}
				snapToInterval={ITEM_WIDTH}
				keyExtractor={(item) => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 20 }}

			/>

			<View className="absolute top-1/2 left-0 flex-row justify-between w-full mt-4">
				{index !== 0 && <TouchableOpacity onPress={scrollPrev} className="ml-4 absolute left-0">
					<MaterialIcons name="arrow-left" size={36} color="white" />
				</TouchableOpacity>}
				{index !== movies.length - 1 && <TouchableOpacity onPress={scrollNext} className="mr-4 absolute right-0">
					<MaterialIcons name="arrow-right" size={36} color="white" />
				</TouchableOpacity>}
			</View>
			<View className="justify-center items-center mt-4">
				<Text className="text-white font-barlow-medium text-base">
					{movies[index]?.title}
				</Text>
				<View className="flex-row mt-1">
					{
						movies[index]?.tags.map((tag, index) => (
							<Text key={index} className="text-white mx-2 font-barlow-normal bg-tags p-1 rounded-md">
								{tag}
							</Text>
						))
					}
				</View>
			</View>
		</View>
	</>
};

export default NowShowing;

import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

const categories: string[] = [
	"Action",
	"Adventure",
	"Comedy",
	"Crime",
	"Drama",
	"Fantasy",
	"Horror",
	"Romance",
	"Thriller",
	"Western"
];

const CategoryList: React.FC = () => {

	const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

	return <>
		<View className='flex-row justify-center items-center mt-3 mx-2'>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{categories.map((category, index) => {
					return <CategoryItem
						key={index}
						category={category}
						active={activeCategory === category}
						onPress={() => setActiveCategory(category)}
					/>
				})}
			</ScrollView>
		</View>
	</>
};


export default CategoryList;
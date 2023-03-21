import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type CategoryListProps = {
	category: string;
	active?: boolean;
	onPress?: () => void;
}


const CategoryItem: React.FC<CategoryListProps> = ({ category, active, onPress }) => {
	return <>
		<TouchableOpacity onPress={onPress} className='flex-row justify-center items-center px-4 py-2 rounded-xl mx-2'>
			<Text className={`text-base font-barlow-normal ${active ? 'text-primary font-barlow-medium-italic' : 'text-white'}`}>{category}</Text>
		</TouchableOpacity>
	</>
};


export default CategoryItem;
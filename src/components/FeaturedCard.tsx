import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { config } from './../config';
import { width } from '../config/constants';



interface FeaturedCardProps {
	name: string;
	image: string;
	avaliable: boolean;
	onPress?: () => void;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ name, image, avaliable, onPress }) => {

	return <>
		<TouchableOpacity onPress={onPress}>
			<ImageBackground resizeMode='stretch' imageStyle={{ borderRadius: 12 }} source={{ uri: image }} style={{ width: width - 150 }} className="h-[200px] justify-center self-center">
				<View style={{ backgroundColor: config.colors.blue }} className='flex-1  opacity-50 rounded-xl'></View>
				<View className='absolute top-3 left-3'>
					<Text className='text-white text-base font-barlow-normal px-4 py-2'>{name}</Text>
				</View>
				<TouchableOpacity
					className='absolute top-3 right-3'>
					<Icon name="share" size={25} color="#fff" />
				</TouchableOpacity>
				<View className='absolute bottom-0 right-3 flex-row items-center'>
					<Icon name="confirmation-num" size={20} color="#fff" />
					<Text className='text-white text-base font-barlow-normal pl-2 py-2'>{avaliable ? 'Tickets Available' : 'SOLD!'}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	</>
};


export default FeaturedCard;
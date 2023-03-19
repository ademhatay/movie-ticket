import React, { useRef } from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';

interface FeaturedCardProps {
	name: string;
	image: string;
	avaliable: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ name, image, avaliable }) => {
	const componentRef = useRef(null);

	const shareComponent = async () => {
		try {
			const uri = await captureRef(componentRef, {
				format: 'png',
				quality: 1,
			});

			const options = {
				url: uri,
				message: 'Bakın bu bileşeni paylaşıyorum!',
				social: Share.Social.TWITTER
			};

			await Share.open(options);
		} catch (error) {
			// hatayı yakala ve göster
			console.log(error);
		}
	};

	return <>
		<TouchableWithoutFeedback ref={componentRef}>
			<ImageBackground imageStyle={{ borderRadius: 12 }} source={{ uri: image }} className="w-[330px] h-[200px] justify-center self-center">
				<View className='flex-1 bg-red-500 opacity-40 rounded-xl'></View>
				<View className='absolute top-3 left-3'>
					<Text className='text-white text-base font-barlow-normal px-4 py-2'>{name}</Text>
				</View>
				<TouchableOpacity
					onPress={shareComponent}
					className='absolute top-3 right-3'>
					<Icon name="share" size={25} color="#fff" />
				</TouchableOpacity>
				<View className='absolute bottom-0 right-3 flex-row items-center'>
					<Icon name="confirmation-num" size={20} color="#fff" />
					<Text className='text-white text-base font-barlow-normal pl-2 py-2'>{avaliable ? 'Tickets Available' : 'SOLD!'}</Text>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	</>
};


export default FeaturedCard;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';


interface TabButtonProps {
	text: string;
	active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ text, active }) => {
	return <TouchableOpacity>
		<View className={`w-24 h-6 flex-row justify-center items-center rounded-3xl`}>
			<Text className={`font-barlow-medium text-base ${active ? 'text-primary' : 'text-gray-400'}`}>{text}</Text>
		</View>
	</TouchableOpacity>
};

const Tabs: React.FC = () => {
	return <>
		<View className='w-full h-6 flex-row justify-evenly px-10'>
			<TabButton text='All Movies' active />
			<TabButton text='For Kids'  />
			<TabButton text='My Tickets' />
		</View>
	</>
};


export default Tabs;
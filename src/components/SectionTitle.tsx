import React from 'react';
import { View, Text } from 'react-native';

interface SectionTitleProps {
	title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
	return <>
		<Text className='text-white font-barlow-medium text-2xl mb-2'>{title}</Text>
	</>
};


export default SectionTitle;
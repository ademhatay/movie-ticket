import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type Props = {
	title: string;
	onPress: () => void;
};

const Button = ({ title, onPress }: Props) => {
	return (
		<TouchableOpacity className="bg-white  w-16 h-8 items-center justify-center rounded-lg" onPress={onPress}>
			<Text className="font-bold">{title}</Text>
		</TouchableOpacity>
	);
};

const App = () => {
	const [count, setCount] = useState(0);

	const handlePress = () => {
		setCount(count + 1);
	};

	return (
		<View className="flex-1 bg-red-500 justify-center items-center">
			<Text className="text-2xl font-bold text-white mb-5">You clicked the button {count} times.</Text>
			<Button title="Click me" onPress={handlePress} />
		</View>
	);
};

export default App;

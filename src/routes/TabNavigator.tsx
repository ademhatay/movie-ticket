import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ForKids, Home, MyTickets } from '../screens';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarLabelStyle: {
					fontSize: 13,
					color: '#fff',
					fontFamily: 'Barlow-Medium-Medium'
				},
				tabBarItemStyle: {},
				tabBarStyle: { 
					backgroundColor: '#1E1F27',
				},
				tabBarIndicatorStyle: { backgroundColor: '#D98639' },
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'All Movies',
				}}
			/>
			<Tab.Screen
				name="ForKids"
				component={ForKids}
				options={{
					tabBarLabel: 'For Kids',
				}}
			/>
			<Tab.Screen
				name="MyTickets"
				component={MyTickets}
				options={{
					tabBarLabel: 'My Tickets',
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigator;
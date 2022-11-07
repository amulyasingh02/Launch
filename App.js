
import React from "react";
import { useState,useLayoutEffect,useEffect,useRef} from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileSCreen from './src/mainPages/ProfileScreen';
import CrateScreen from './src/mainPages/CrateScreen';
import Ionicon from './node_modules/react-native-vector-icons/Ionicons';
import HomeScreen from './src/mainPages/HomeScreen';



const Tab=createBottomTabNavigator();


const App=({navigation,route})=>{


	return(
		<NavigationContainer >
			<Tab.Navigator initialRouteName="Home"  screenOptions={({route})=>({tabBarIcon:({focused,color,size})=>{
				let iconName;
				if(route.name=='Profile')
				iconName=!focused?'person-outline':'person';
				else if(route.name=='Crate')
				iconName=!focused?'file-tray-stacked-outline':'file-tray-stacked';
				else
				iconName=!focused?'earth-outline':'earth';
				return <Ionicon name={iconName} color={color} size={size} />;
			},tabBarActiveTintColor:'orange',tabBarInactiveTintColor:'red',tabBarInactiveBackgroundColor:true,headerTransparent:true })}>
				<Tab.Screen name="Profile" component={ProfileSCreen} />
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Crate" component={CrateScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
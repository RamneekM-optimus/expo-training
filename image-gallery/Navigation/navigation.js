import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import {Text} from 'react-native';
import ImageGrid from '../components/AssetExample';
import { AntDesign } from '@expo/vector-icons'; 
import Home from "../components/Home";
const Stack = createStackNavigator();

export const Navigation = (props) => {
    useEffect( () => {

    }, []);
    const navigationRef = React.useRef(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
            <Stack.Screen name="Home"  component={Home} options = {{headerTitleAlign: {textAlign: "center"}}}/>
                <Stack.Screen name="Gallery" component={ImageGrid} options = {{headerRight : () => (
                    <AntDesign name="user" size={24} color="black"/>
                ), headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default Navigation;

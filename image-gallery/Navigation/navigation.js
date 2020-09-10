import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import ImageGrid from '../components/AssetExample';
import { AntDesign } from '@expo/vector-icons'; 
import Home from "../components/Home";
import LoginView from "../components/LoginPage";

const Stack = createStackNavigator();

export const Navigation = (props) => {

    const navigationRef = React.useRef(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
            <Stack.Screen name = "Login" component = {LoginView} options = {{headerShown: false}}/>
            <Stack.Screen name="Home"  component={Home} options = {{headerTitleAlign: {textAlign: "center"}}}
            options = {{headerLeft: () => (
                <HeaderBackButton
                    onPress={() => {
                        props.clearAuthData();
                        navigationRef.current?.navigate("Login");
                    }}
                />
            )}}/>
                <Stack.Screen name="Gallery" component={ImageGrid} options = {{headerRight : () => (
                    <AntDesign name="user" size={24} color="black"/>
                ), headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default Navigation;

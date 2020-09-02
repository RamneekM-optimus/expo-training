import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Home from '../Screens/Home';
import {ExpoScanner} from '../Screens/Camera';
import DetailsScreen from '../Screens/DetailsScreen';
import { getStorageData, logout } from '../Services/AuthService';
import {Text} from 'react-native';

const Stack = createStackNavigator();

export const Navigation = (props) => {
    console.log(props);
    useEffect( () => {
        async function getStorageValue() {
            setemail(await getStorageData());
        };
        getStorageValue();

    }, []);
    const navigationRef = React.useRef(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                <Stack.Screen email = {email} name="List" component={DetailsScreen} options = {{headerRight : () => (
                    <Text>{email ?email.split('@')[0]: null}</Text>
                ), headerLeft: () => (
                    <HeaderBackButton
                        onPress={() => {
                            logout();
                            navigationRef.current?.navigate("Home");
                        }}
                    />
                )}}/>
                <Stack.Screen email = {email} name="Camera" component={ExpoScanner} options = {{headerRight : () => (
                    <Text>{email ? email.split('@')[0]: null}</Text>
                )}}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default Navigation;

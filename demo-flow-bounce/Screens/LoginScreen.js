import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export const LoginScreen = (props) => {
    
    return (
        <View style = {styles.loginScreen}>
                <Text> Login Screen</Text>
                <Button
                title="Login"
                onPress={props.loginUser}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default LoginScreen

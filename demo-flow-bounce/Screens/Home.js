import React from 'react'
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import {Logo} from '../assets/logo.png';
import {signIn, saveDataToStorage} from '../Services/AuthService';

export const Home = (props) => {
    const [value, onChangeText] = React.useState('');
    const [pass, setPassValue] = React.useState('');
    const [errorText, setError] = React.useState('');

    const clicked = () => {
        signIn(value, pass)
        .then(async (data) => {
            await saveDataToStorage(data.data.email, data.data.idToken);
            props.navigation.navigate("List");
            onChangeText('');
            setPassValue('');
            setError('');
        })
        .catch(err => {
            setError("error signing in");
            console.log("error message",err);
        })
    }

    return (
            <View style = {styles.homeScreen}>
                <View style = {styles.imageContainer}>
                    <Image  source = {require('../assets/logo.png')} style = {styles.image}/>
                </View>
                <View style = {styles.formContainer}>
                    <View style = {styles.textInput}>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 20}}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    keyboardType = "email-address"
                    placeholder = "Email"
                    errorText = "Please enter a valid email address"
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: StyleSheet.hairlineWidth, marginTop: 20, marginBottom: 20}}
                    onChangeText={text => setPassValue(text)}
                    value={pass}
                    placeholder = "Password"
                    errorText = "Please enter a valid password"
                    secureTextEntry
                />
                    </View>
                        <Text style = {{color: "red", fontSize: 9}}>{errorText}</Text>
                    <View>
                    <Button onPress = {() => clicked()} title = "Login"></Button>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 3
    },
    formContainer: {
        flex: 1,
        width: "80%",
        // height: 100
    },
    image: {
        height: "90%",
        padding: "5%"
    }
});

export default Home;

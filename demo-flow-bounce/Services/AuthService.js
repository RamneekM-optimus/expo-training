import axios from 'axios';
import {AsyncStorage} from 'react-native';

baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2g5qsgl39MD-GTHN9iv0Zh7GP59M4DWw";

export const signIn = (email, password) => {
    const returnSecureToken = true;
    const postData = {email, password, returnSecureToken};
    console.log(postData);
    return axios.post(`${baseUrl}`, postData);
}

export const logout = () => {
    AsyncStorage.removeItem("email");
    AsyncStorage.removeItem("email");
}

export const saveDataToStorage = (email ,token) => {
    AsyncStorage.setItem('email', JSON.stringify(email));
    AsyncStorage.setItem('token', JSON.stringify(token));
}

export const getStorageData = () => {
    return AsyncStorage.getItem("email");
}
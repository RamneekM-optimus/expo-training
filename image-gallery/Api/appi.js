import axios from 'axios';

const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos`;


const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        console.log(data.errors);
    }
    return data;
};

baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2g5qsgl39MD-GTHN9iv0Zh7GP59M4DWw";

const signIn = async({email, password}) => {
    const returnSecureToken = true;
    const postData = {email, password, returnSecureToken};
    const response =  await axios.post(`${baseUrl}`, postData);
    const data = response;
    if (response.status >= 400) {
        console.log(data.errors);
    }
    return data;

}

export { fetchImages, signIn };


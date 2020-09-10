import {LOGIN} from "../../Constant/constant";
import { call } from "redux-saga/effects";


const authReducer = (state = {}, action) => {

    if(action.type === LOGIN.LOGIN_SUCCESS) {
        console.log(action);
        return action.credential;
    } else if(action.type === LOGIN.CLEAR_AUTH_DATA) {
        console.log("Called")
        return {};
    }
    return state;
};

export default authReducer;
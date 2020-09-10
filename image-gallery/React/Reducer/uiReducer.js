import {LOGIN} from "../../Constant/constant";
import { call } from "redux-saga/effects";


const dimensionReducer = (state = {}, action) => {
    if (action.type === "DIMENSION") {
        const {width, heigth} = action.data;
        return {width, heigth};
    }
    return state;
};

export default dimensionReducer;
import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError, setLoader, dimensionAction } from '../React/action';
import { IMAGES } from '../Constant/constant.js';
import { fetchImages } from '../Api/appi';


export function* handleDimensionLoad(data) {
    console.log("dimesnsion saga", data)
    try {
        console.log("dimesnsion saga", data)
        yield put(dimensionAction(data.data, data.type));
    } catch (error) {
        console.log(error);
    }
}

export default function* watchDimensionLoad() {
    yield takeEvery("DIMENSION", handleDimensionLoad);
}

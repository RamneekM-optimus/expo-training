import { put, call, take, select, takeLatest, takeEvery, fork } from 'redux-saga/effects';

import { setImages, setError, setLoader, setLoginDetailsAction } from '../React/action';
import { IMAGES, LOGIN } from '../Constant/constant.js';
import { signIn } from '../Api/appi';

export default function* watchLogin(credential) {
    try {
        const data = yield call(signIn, credential);
        console.log(data.data);
        const token = yield put(setLoginDetailsAction(data.data));
        console.log("token", token);
    } catch (error) {
        console.log("error",error)
        yield put(setError(error.toString()));
    }
}

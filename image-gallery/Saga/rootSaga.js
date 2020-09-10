import { all } from 'redux-saga/effects';
import { put, call, takeEvery, select, take, fork } from 'redux-saga/effects';
import {LOGIN} from "../Constant/constant";
import imagesSaga from './imageSaga';
import uiSaga from './uiSaga';
import watchLogin from "./authenticationSaga";

//watcher saga
export default function* rootSaga() {

    while (true) {
        const {credential} = yield take(LOGIN.LOGIN_USER);
        const task = yield fork(watchLogin, credential);
        yield all([imagesSaga()]);
    }
}

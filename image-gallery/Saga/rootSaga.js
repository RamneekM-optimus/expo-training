import { all } from 'redux-saga/effects';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import imagesSaga from './imageSaga';
import uiSaga from './uiSaga';

//watcher saga  
export default function* rootSaga() {

    //imageSaga is worker saga
    yield all([imagesSaga()]);
}

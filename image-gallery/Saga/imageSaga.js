import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError, setLoader } from '../React/action';
import { IMAGES } from '../Constant/constant.js';
import { fetchImages } from '../Api/appi';

export const getPage = state => state.pageIndex;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
        yield put(setLoader(IMAGES.LOAD_FAIL));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

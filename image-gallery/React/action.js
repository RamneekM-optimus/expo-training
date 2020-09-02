import {IMAGES} from "../Constant/constant";

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const setCurrentPageIndex = pageIndex => ({
    type: "PAGINATION_STATE",
    current_page: pageIndex
});

const setLoader = (type) => ({
    type: type
});

const dimensionAction = (data, type) => ({
    type: "DIMENSION",
    data: data
});

export {loadImages, setError, setImages, setCurrentPageIndex, setLoader, dimensionAction};
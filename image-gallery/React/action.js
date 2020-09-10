import {IMAGES, LOGIN} from "../Constant/constant";

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

const loginUserAction = (data) => ({
    type: LOGIN.LOGIN_USER,
    credential: data
});

const setLoginDetailsAction = (data) => ({
    type: LOGIN.LOGIN_SUCCESS,
    credential: data
});

const clearAuthData = () => ({
    type: LOGIN.CLEAR_AUTH_DATA,
});

const logout = (data) => ({
    type: LOGIN.LOGOUT_SUCCESS,
});

export {loadImages, setError, setImages, setCurrentPageIndex, setLoader, dimensionAction, 
    loginUserAction, setLoginDetailsAction, clearAuthData};
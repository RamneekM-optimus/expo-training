import { combineReducers } from 'redux';

import  errorReducer  from "./errorReducer.js";
import  imagesReducer  from "./imageReducer.js"; 
import  loadingReducer  from "./loadingStateReducer.js";
import paginationReducer from "./paginationReducer";
import dimensionReducer from "./uiReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    pageIndex: paginationReducer,
    dimensions: dimensionReducer,
    authData: authReducer
});

export default rootReducer;
import { combineReducers } from 'redux';

import  errorReducer  from "./errorReducer.js";
import  imagesReducer  from "./imageReducer.js"; 
import  loadingReducer  from "./loadingStateReducer.js";
import paginationReducer from "./paginationReducer";
import dimensionReducer from "./uiReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    pageIndex: paginationReducer,
    dimensions: dimensionReducer
});

export default rootReducer;
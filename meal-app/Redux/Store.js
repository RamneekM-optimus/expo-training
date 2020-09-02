import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';

//Reducer imports
import MealsReducer from './Reducer/Meals.Reducer';

const initialState = {};
// const middleware = [thunk];
const reducers = combineReducers({
    meals: MealsReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, initialState);

export default store;
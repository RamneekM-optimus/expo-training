import {MEALS} from "../../Data/dummy-data"; 
import { Switch } from "react-native-gesture-handler";
import { TOGGLE_FAVORITE } from '../Actions/Meals.action';
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: MEALS
}

const MealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE : 
            const existingIndex = state.filteredMeals.findIndex(meal => action.mealId);
            const updatedMeals = [...state];
            updatedMeals.splice(existingIndex, 1);
            if(existingIndex >= 0) {
                return {...state, favoriteMeals: updatedMeals}
            } else {
                return {...state, favoriteMeals: state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId))}
            }
        default: 
        return state
    }
}

export default MealsReducer;
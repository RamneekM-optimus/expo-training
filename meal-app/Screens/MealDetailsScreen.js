import React, { useEffect, useCallback } from 'react'
import {View, Text, StyleSheet} from 'react-native';
// import {MEALS} from '../Data/dummy-data';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../Redux/Actions/Meals.action';


export const MealDetail = (props) => {
    const dispatch = useDispatch();

    const mealId = props.navigation.getParam('mealId');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const selectedMeal = useSelector(state => state.meals.meals);
    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleHandler});
    }, [toggleHandler])

    const toggleHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    return (
        <View style = {styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

export default MealDetail;

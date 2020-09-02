import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORY, MEALS} from '../Data/dummy-data';
import MealItemComponent from '../components/MealItemComponent';
import {useSelector} from 'react-redux';

export const CategoryMealScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');
    const seletedCategory = CATEGORY.find(category => category.id === categoryId);
    const meals = useSelector(state => state.meals.filteredMeals.filter(meal => meal.categoryId.includes(seletedCategory.id)));
    // const meals = MEALS.filter(meal => meal.categoryId.includes(seletedCategory.id));

    const renderMealItems = (itemData) => {
        return <MealItemComponent 
                title = {itemData.item.title}
                onSelectMeal = {() => props.navigation.navigate({routeName: 'MealDetail', 
                params: {mealId: itemData.item.id}
                })}
                duration = {itemData.item.duration}
                affordability = {itemData.item.affordability}
                complexity = {itemData.item.complexity}
                imageUrl = {itemData.item.imageUrl}
                />
    }

    return (
        
        <View >
            <FlatList
            data = {meals}
            keyExtractor = {(item, index) => item.id}
            renderItem = {renderMealItems}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    }
});

export default CategoryMealScreen;

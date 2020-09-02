import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import {createAppContainer} from 'react-navigation';
// import { HeaderButtons, Items } from 'react-navigation-header-buttons';

import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealScreen from '../Screens/CategoryMealsScreen';
import MealDetail from '../Screens/MealDetailsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FilterScreen from '../Screens/FilterScreen';

import Color from '../Constants/Color';

import { Ionicons} from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
    Categories: {screen: CategoriesScreen, navigationOptions: {
        headerTitle: 'Category', 
        headerStyle: {
            backgroundColor : `${Color.primaryColor}`
        }}},
    CategoryMeals: CategoryMealScreen,
    MealDetail: {
        screen: MealDetail
    }
});

const FilterNavigator = createStackNavigator({
    Filter: FilterScreen
})

const FavoriteNavigator = createStackNavigator({
    Favorite: FavoritesScreen
})

const MealsFavTabNavigator =  createBottomTabNavigator({
    Meals: {screen: MealsNavigator,
    navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name = 'ios-restaurant' size = {25} color = {tabInfo.tintColor}/>
        }
    }
    },
    Favorites: {screen: FavoriteNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name = 'ios-star' size = {25} color = {tabInfo.tintColor}/>
        }
    }}
}, {
    tabBarOptions: {
        activeTintColor: Color.accentColor
    }
}
);

const MainNavigator = createDrawerNavigator({
    MealFavs: MealsFavTabNavigator,
    Filters: FilterNavigator
});

export default createAppContainer(MainNavigator);

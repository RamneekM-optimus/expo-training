import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORY} from '../Data/dummy-data';
import Color from '../Constants/Color';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

export const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (<CategoryGridTitle 
            title = {itemData.item.title}
            color = {itemData.item.color}
            onSelect = {() => props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
                categoryId: itemData.item.id
            }
        })}/>)
    }
    return (
        <FlatList
        keyExtractor = {(item, index) => item.id}
        data = {CATEGORY} 
        numColumns = {2}
        renderItem = {renderGridItem}
        />
    )
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title = 'Menu' iconName = "ios-menu" onPress = {() => {
            navData.navigation.toggleDrawer();
        }}/>
        </HeaderButtons>
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen

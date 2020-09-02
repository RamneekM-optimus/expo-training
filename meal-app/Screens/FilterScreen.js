import React, { useState } from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Color from '../Constants/Color';

const FilterSwitch = props => {
    return (
        <View style = {styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
        value = {props.value} 
        onValueChange = {props.setValue}
        trackColor = {{true: Color.primaryColor}}
        thumbColor = {Color.primaryColor}
        ></Switch>
        </View>
    )
}

export const FilterScreen = (props) => {
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    return (
        <View style = {styles.screen}>
            <Text style = {styles.title}>Available Filters</Text>
                <FilterSwitch value = {isGlutenFree} label = "Gluten Free" setValue = {(value) => setGlutenFree(value)}/>
                <FilterSwitch value = {isLactoseFree} label = "Lactose Free" setValue = {(value) =>setLactoseFree(value)}/>
                <FilterSwitch value = {isVegan} label = "Vegan" setValue = {(value) => setVegan(value)}/>
                <FilterSwitch value = {isVegetarian} label = "Vegetarian" setValue = {(value) => setVegetarian(value)}/>
        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {
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
        width: "100%",
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 22
    },
    filterContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        width: "80%",
        justifyContent: "space-between"
    }
});

export default FilterScreen;

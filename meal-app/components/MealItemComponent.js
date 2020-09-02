import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

export const MealItemComponent = (props) => {
    return (
        <View style = {styles.mealItem}>
        <TouchableOpacity onPress = {props.onSelectMeal}>
        <View>
            <View style = {{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source = {{uri: props.imageUrl}} style = {styles.image}>
                <Text numberOfLines = {1} style = {styles.title}>{props.title}</Text>
            </ImageBackground>
            </View>
            <View style = {{...styles.mealRow, ...styles.mealDetails}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity}m</Text>
                <Text>{props.affordability}m</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        fontFamily: 'open-sans-bold',
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
        fontFamily: 'open-sans-bold'
    },
    mealDetails: {
        height: '20%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});

export default MealItemComponent;

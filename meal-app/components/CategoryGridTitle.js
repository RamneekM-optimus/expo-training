import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTitle = props => {
    let Touchable = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version > 21) {
        Touchable = TouchableNativeFeedback;
    }
    return (
        <View style = {styles.grid}>
        <Touchable style = {{flex: 1}} onPress = {props.onSelect}>
        <View style = {{...styles.container,backgroundColor: props.color}}>
            <Text numberOfLines = {2} style = {styles.title}>{props.title}</Text>
        </View>
        </Touchable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: 150,
        borderRadius: 10
    },
    grid: {
        flex: 1,
        alignItems: 'center',
        height: 150,
        width: 200,
        margin: 15,
        elevation: 3,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
})

export default CategoryGridTitle;
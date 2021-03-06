import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

export const FavoritesScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>The Favorites Screen</Text>
        </View>
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item  title = 'Menu' iconName = "ios-menu" onPress = {() => {
            navData.navigation.toggleDrawer();
        }}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }
});

export default FavoritesScreen;

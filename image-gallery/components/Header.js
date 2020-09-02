import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

// import { Card } from 'react-native-paper';



export default function Header(props) {
    const handleCLick = () => {
        console.log("click")
        props.navigation.navigate("Home")
    }

  return (
      <Card style = {styles.header}>
        <View style = {{flexDirection: "row"}}>
            <View style = {{alignSelf: "center", flex: 11}}>
            <Text style = {styles.headerText}>
                What the Splash !
            </Text>
            </View>
            <View style = {{alignItem: "flex-end", flex: 1, paddingRight: 0, marginRight: 0}}>
                <AntDesign style = {{marginTop: 0}} name="user" size={24} color="black"
                onPress = {() => handleCLick()}
                />
            </View>

        </View>
        </Card>
  );
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        color: "#424242",
        top: 0,
        shadowColor: "#000",
        elevation: 5,   
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        alignSelf: "center"
    }
});

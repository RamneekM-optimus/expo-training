import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { insertScreens } from '../DB/db';
import { getAllScreens } from '../DB/db';


export const DetailsScreen = (props) => {

    const [state, setstate] = useState([]);
    useEffect(() => {
        getAllScreens()
        .then(data => {
            setstate(data.rows._array);
            return data;
        })
        .then((data) => {
            console.log("data", data.rows._array);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    openCamera = () => {
        props.navigation.navigate("Camera");
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={state}
                contentContainerStyle={styles.list}
                renderItem={({item}) => (
                <TouchableOpacity onPress = {() => openCamera()} style={styles.item}>
                        <Text >{item.name}</Text>
                </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: "#f9c2ff",
      textAlign: "center",
      alignItems: "center"
      
    },
    title: {
      fontSize: 32,
    },
  });

export default DetailsScreen;

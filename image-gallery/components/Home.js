import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
import { ScrollView } from 'react-native-gesture-handler';


const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export class Home extends Component {
    constructor(props) {
        super(props);
    }


    handleClick = () => {
        console.log("clicked", this.props);
        this.props.navigation.navigate("Gallery");
    }

    render() {
        console.log("home",this.props)
        return (
            <View style={styles.container}>
            <ScrollView style = {styles.scroll}>
            <View style={styles.box}>
                <Text style={styles.title}>Awesome Blog Post Page</Text>
                <Text style={styles.text}>{loremIpsum}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress = {() => this.handleClick()}>
                        <Text style={styles.buttonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Decline</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    scroll: {
        alignSelf: "center",
        marginTop: 10
    },
    box: {
        width: width * 0.8,
        height: height * 0.8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },
    title: {
        fontSize: height < 1024 ? 20 : 40,
        fontWeight: 'bold',
        marginBottom: height/40,
        color: 'black'
    },
    text: {
        fontSize: height < 1024 ? 14 : 30,
        color: 'black'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: width > 500 ? width/3 : 150,
        height: width > 500 ? width/10 : 45,
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: '#41B6E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: height < 1024 ? 14 : 30,
        color: 'white'
    }
});

const mapStateToProps = ({ dimension }) => ({
    dimension
});

export default connect(
    mapStateToProps,
    {}
  )(Home);

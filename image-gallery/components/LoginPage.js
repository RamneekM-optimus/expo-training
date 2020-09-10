import React, { Component } from 'react';
import { Video } from 'expo-av';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions,
  Platform, 
  PixelRatio
} from 'react-native';
import { color } from 'react-native-reanimated';
import { connect } from 'react-redux';
import {loginUserAction} from "../React/action";

const {height, width} = Dimensions.get("window");
const scale = width / 320;

function actuatedNormalize(size) {
    const newSize = size * scale 
     if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
     } else {
       return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
     }
  }

class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  // componentDidMount() {
  // }

  onClickListener = () => {
    // Alert.alert("Alert", "Button pressed "+viewId);
    const {email, password} = this.state;
    this.props.loginUserAction(this.state);
    this.props.navigation.navigate("Home");
  }

  render() {
    console.log("login page", this.props.authData)
    return (
      <View style={styles.container}>
        <Video
          source={require('../assets/sukh.mp4')}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          shouldPlay
          isLooping
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
          <View style = {styles.appHeading}>
              <Text style = {styles.appHeadingText}>
                  The Demo App
              </Text>
          </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text style = {{color: "white"}}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style = {{color: "white"}}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width: actuatedNormalize(250),
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      fontSize: actuatedNormalize(10)
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
    fontSize: actuatedNormalize(10)
  },
  appHeading: {
    width: actuatedNormalize(250),
    height: actuatedNormalize(100),
  },
  appHeadingText: {
    fontSize: actuatedNormalize(18),
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
    }
});

const mapStateToProps = ({ authData }) => ({
  authData
});

const mapDispatchToProps = (dispatch) => ({
  loginUserAction: (data) => dispatch(loginUserAction(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

        
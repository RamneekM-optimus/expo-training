import React, { Component } from 'react';
import { Alert, View, Text, Vibration, StyleSheet, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera'; 
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-native-safe-area-context';

export class ExpoScanner extends Component {
  constructor(props) {
    super(props);

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.scannedCode = null;

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await this.setState({hasCameraPermission: status === 'granted'});
    await this.resetScanner();
  }

  renderAlert(title, message) {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => this.resetScanner() },
      ],
      { cancelable: true }
    );
  }

  onBarCodeRead({ type, data } ) {
    console.log(type, data, Camera.Constants.Type.back);
    this.renderAlert(
      'This barcode scanned data',
      `${type} : ${data}`,
    );
  }

  renderMessage() {
    if (this.state.scannedItem && this.state.scannedItem.type) {
      const { type, data } = this.state.scannedItem;
      return (
        <Text style={styles.scanScreenMessage}>
          {`Scanned \n ${type} \n ${data}`}
        </Text>
      );
    }
    return;
  }

  resetScanner() {
    this.scannedCode = null;
    this.setState({
      scannedItem: {
        type: null,
        data: null
      }
    });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={this.onBarCodeRead}
            style={StyleSheet.absoluteFill}
            type={Camera.Constants.Type.front}
          />
          {this.renderMessage()}
          <View style = {styles.imageContainer}>
          <Image  source = {require('../assets/barcode1.png')} style = {styles.image}/>
          </View>
          <View style = {styles.barcodeDiv}>
          <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  scanScreenMessage: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  barcodeDiv: {
    width: "80%",
    height: "80%",
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
  },
  imageContainer: {
    marginTop: "10%",
    marginLeft: "10%",
    justifyContent: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // margin: "auto",
    marginTop: 70,
    width: 0,
    height:0
  },
  image: {
    padding: "5%",
    // width: 250,
    // height: 250,
    marginLeft: 350,
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1
  }
});
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import { connect } from 'react-redux';

// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm

import {dimensionAction} from "./React/action";
import Navigation from "./Navigation/navigation";
import {clearAuthData} from "./React/action";

function ReduxApp(props) {

    React.useEffect(() => {
      const updateLayout = () => {
        const width = Dimensions.get('window').width;
          const height = Dimensions.get('window').height;
          props.dimensionAction({width, height}, "DIMENSION");
      }
      Dimensions.addEventListener('change', updateLayout);
      return () => {
          Dimensions.removeEventListener('change', updateLayout);
      }
    },[]);

    React.useEffect(() => {
      console.log("reduxxxx appxpxpxpx",props.dimension);
    });
  
    return (
      <View style={styles.container}>
      <Navigation clearAuthData = {props.clearAuthData}></Navigation>
    </View>
    );
  }
  
  const mapStateToProps = ({ dimension }) => ({
    dimension
  });
  
  const mapDispatchToProps = dispatch => ({
    dimensionAction: (data, type) => dispatch(dimensionAction(data, type)),
    clearAuthData: () => dispatch(clearAuthData())
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
      marginTop: 2
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReduxApp);
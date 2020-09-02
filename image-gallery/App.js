import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import Header from './components/Header';
import { connect } from 'react-redux';

// You can import from local files
import AssetExample from './components/AssetExample';
import configureStore from './React/store';
// or any pure javascript modules available in npm

import GlobalErrorBoundary from './utilities/ErrorBoundaries/GlobalErrorBoundary';
import ReduxApp from "./ReduxApp";

const store = configureStore();

export default function App() {
  return (
    <GlobalErrorBoundary>
      <Provider store = {store}>
      <ReduxApp/>
      </Provider>
    </GlobalErrorBoundary>
  )
}


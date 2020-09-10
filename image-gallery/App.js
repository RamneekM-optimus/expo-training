import * as React from 'react';
import { Provider } from 'react-redux';

// You can import from local files
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


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default class GlobalErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log(error);
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Card style = {styles.errorContainer}>
                <Text style = {styles.errorText}>
                  Oops, Something went wrong !!!.
                </Text>
              </Card>
      }
      return this.props.children;
    }
  }

  const styles = StyleSheet.create({
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    errorText: {
      textAlign: "center",
      fontWeight: "bold"
    }
  });
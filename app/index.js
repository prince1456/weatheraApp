import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './Screen/'

export default class App extends React.Component {
  render () {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

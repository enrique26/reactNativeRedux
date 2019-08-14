/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ListTodos from './src/ListTodos';
import {Provider,connect} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
// import store from './redux/store/store';
import {store,persistor} from './redux/store/store';


class MainApp extends React.Component {
  render() {
    return (<ListTodos></ListTodos>)
  }
}

export default class App extends React.Component {
  render(){
    return(
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Provider store={store}>
          <MainApp></MainApp>
        </Provider>
      </PersistGate>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

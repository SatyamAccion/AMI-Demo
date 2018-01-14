/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Login from './src/screens/Login';
import Main from './src/screens/Main'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Login: {
    screen: Login,
  },
  Main: {
    screen:Main,
  }
});

const instructions = Platform.select({
  ios: 'AMI-APP',
  android: 'AMI-APP',
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  Text
} from 'react-native';

global.mode= "native";
console.log(mode);

import HelloUI from './app/shared/Hello.component';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View >
        <HelloUI/>
      </View>
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

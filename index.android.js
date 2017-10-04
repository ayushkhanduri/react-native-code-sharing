/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  AppRegistry
} from 'react-native';

console.log("AsdASDASD");
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

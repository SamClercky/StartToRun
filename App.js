import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './scenes/timer/HomeScene.js';

export default class App extends Component<{}> {
  render() {
    return (
      <RootNavigator />
    );
  }
}

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    }}
});

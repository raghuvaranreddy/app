/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { TabNavigator, StackNavigator} from 'react-navigation'
import WelcomeScreen from './src/welcome-screen'
import BatchDetails from './src/batch-details'
import BarChart from './src/bar-chart'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      < AppStackNavigator />
    );
  }
} 

const AppStackNavigator = TabNavigator(
  {
    Batches: StackNavigator(
    {
      WelcomeScreen: { screen: WelcomeScreen,
        navigationOptions: () => ({
          header : null
        })
      },
      BatchDetails: { screen: BatchDetails }
    }),
    Fraud: { screen: WelcomeScreen,
      navigationOptions:{
        tabBarLabel: "Fraud",
      }
    },
    EMVVSNONEMV: { screen: WelcomeScreen,
      navigationOptions:{
        tabBarLabel: "EMV VS NON-EMV",
      }
    },
    CardBrand: { screen: WelcomeScreen,
      navigationOptions:{
        tabBarLabel: "Compare CardBrands",
      }
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true
    },
  }
)

// const AppStackNavigator =  new StackNavigator({
//   WelcomeScreen: { screen: WelcomeScreen},
//   LoginScreen: { screen: LoginScreen }
// })

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

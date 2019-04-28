import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


export default class SettingsComponent extends Component {
  
  static navigationOptions = {
    title: 'Settings',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: 'dodgerblue'
    }
  }

  state = {
    address: null
  }

  render() {

    return (
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
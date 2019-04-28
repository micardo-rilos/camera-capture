import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingHeader, SettingComponent } from './SettingElements';
import Dialog from "react-native-dialog";

export default class SettingsComponent extends Component {
  
  static navigationOptions = {
    title: 'Settings',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: 'dodgerblue'
    }
  }

  state = {
    dialogVisible: false,
    address: "192.168.1.9"
  }

  render() {

    return (
      <View style={styles.container}>
        <SettingHeader text='Server'/>
        <SettingComponent 
          mainText='Server address' 
          subText={this.state.address} 
          onPress={this.showAddressDialog}
          iconName='md-at'
          iconType='ionicon'/>

          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Change server address</Dialog.Title>
            <Dialog.Description>
              Please enter server address.
            </Dialog.Description>
            <Dialog.Input></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={this.handleAddressSubmit} />
            <Dialog.Button label="Ok" onPress={this.handleAddressCancel} />
        </Dialog.Container>
      </View>
    );
  }

  showAddressDialog = () => {
    this.setState({ dialogVisible: true});
  }

  handleAddressSubmit = () => {
    this.setState({ dialogVisible: false});
  }

  handleAddressCancel = () => {
    this.setState({ dialogVisible: false});
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
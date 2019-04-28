import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingHeader, SettingComponent } from './SettingElements';
import DialogInput from "react-native-dialog-input";

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
        <SettingComponent mainText='Server address' 
                          subText={this.state.address} 
                          onPress={this.showAddressDialog}
                          iconName='md-at'
                          iconType='ionicon'/>

          <DialogInput isDialogVisible={this.state.dialogVisible}
                      title={"Change server address"}
                      message={"Please enter new address of the server"}
                      initValueTextInput={this.state.address}
                      submitInput={ (inputText) => { this.handleAddressSubmit(inputText) } }
                      closeDialog={ () => {this.handleAddressCancel()}}>
          </DialogInput>
      </View>
    );
  }

  showAddressDialog = () => {
    this.setState({ dialogVisible: true});
  }

  handleAddressSubmit = (newAddress) => {
    this.setState({ address: newAddress})
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
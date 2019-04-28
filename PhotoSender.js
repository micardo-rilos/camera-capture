import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class PhotoSenderComponent extends Component {
  
  static navigationOptions = {
    header: null
  }

  render() {
    const photo = this.props.navigation.getParam('photo');

    return (
        <ImageBackground style={styles.container} source={{ uri : photo.uri }}>
          <View style={styles.upper}>
            <Icon size={50} name="md-arrow-back" type="ionicon" color="white" onPress={() => this.props.navigation.goBack()}/>
          </View>
          <View style={styles.lower}>
              <Icon size={50} name="md-checkmark" type="ionicon" color="white" onPress={this.sendPicture}/>
          </View>
        </ImageBackground>
    );
  }

  sendPicture = () => {
    imageBody = this.props.navigation.getParam('photo');
    formData = this.createFormData(imageBody);
    fetch("http://192.168.1.9:3000/api/upload", {
      method: "POST",
      body: formData
    })
      .then(response => {
        alert("Zdjęcie wysłane!");
      })
      .catch(error => {
        alert(error);        
      });
  }

  createFormData = (photo) => {
    const data = new FormData();

    data.append("photo", {
      name: "some_photo",
      type: "image/jpeg",
      uri: photo.uri
    });

    return data;
  };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch"
    },
    lower : {
      margin: 20,
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    upper : {
      margin: 20,
      flexDirection: "row",
      justifyContent: "flex-start"
    }
  });
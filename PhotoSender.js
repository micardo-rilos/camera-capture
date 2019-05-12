import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Icon } from 'react-native-elements';
import  AsyncStorage from '@react-native-community/async-storage';

export default class PhotoSenderComponent extends Component {
  
  state = {
    address: null
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.readServerIP();
  }

  readServerIP = async () => {
    try {
        const val = await AsyncStorage.getItem("address");
        if (val != null) {
            await this.setState({address: val});
            AsyncStorage.flushGetRequests();
        }
    } catch (error) {
        alert(error.message);
    }
  };

  render() {
    const photo = this.props.navigation.getParam('photo');

    return (
        <ImageBackground style={styles.container} source={{ uri : photo.uri }}>
          <View style={styles.upper}>
            <Icon size={50} 
                  name="md-arrow-back" type="ionicon" 
                  color="white" underlayColor='transparent'
                  onPress={() => this.props.navigation.goBack()}/>
          </View>
          <View style={styles.lower}>
              <Icon size={50} 
                    name="md-checkmark" type="ionicon" 
                    color="white" underlayColor='transparent' 
                    onPress={this.sendPicture}/>
          </View>
        </ImageBackground>
    );
  }

  sendPicture = () => {
    imageBody = this.props.navigation.getParam('photo');
    formData = this.createFormData(imageBody);

    // fetch("http://" + this.state.address + ":3000/api/upload", {
    //   method: "POST",
    //   body: formData
    // })
    //   .then(response => {
    //     alert("Zdjęcie wysłane!");
    //   })
    //   .catch(error => {
    //     alert(error);        
    //   });

    let mockJSONparams = {
      svgH : "100",
      svgW : "100",
      width: "75",
      height: "75",
      x: "15",
      y: "15"
    }

    this.props.navigation.navigate('SamplePolygon', { photo: imageBody, polyData : mockJSONparams });
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

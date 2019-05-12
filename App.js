import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { createStackNavigator, createAppContainer } from "react-navigation";
import PhotoSenderComponent from './PhotoSender';
import SettingsComponent from './Settings';
import SamplePolygon from './SamplePolygon';

class MainComponent extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    cameraType: RNCamera.Constants.Type.back
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={this.state.cameraType}
          style={styles.camera}
          captureAudio={false}>

          <View style={styles.upper}>
            <Icon size={40} 
                  name='md-images' type='ionicon' 
                  color='white' underlayColor='transparent' 
                  onPress={this.handleChoosePhoto} />
            <Icon size={40} 
                  name='md-reverse-camera' type='ionicon' 
                  color='white' underlayColor='transparent' 
                  onPress={this.changeCamera}/>
            <Icon size={40} 
                  name='md-settings' type='ionicon' 
                  color='white' underlayColor='transparent'
                  onPress={() => this.props.navigation.navigate('Settings')}/>
          </View>

          <View style={styles.lower}>
            <Icon size={50} 
                  name='md-camera' type='ionicon' 
                  color='white' underlayColor='transparent' 
                  onPress={this.handleCapturePhoto.bind(this)}/>
          </View>

        </RNCamera>
      </View>
    );
  }

  changeCamera = () => {
    this.setState((previousState) => (
      { cameraType: (previousState.cameraType === RNCamera.Constants.Type.back) ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back })
    );
  }

  handleChoosePhoto = () => {
    const options = {
      mediaType: "photo"
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.props.navigation.navigate('PhotoSender', {
          photo: response
        });
      }
    })
  }

  handleCapturePhoto = async function() {
    if(this.camera) {
      const options = {
        quality: 0.8,
        basse64: true
      }
      this.camera.takePictureAsync(options).then( data => {
        this.props.navigation.navigate('PhotoSender', {
          photo: data
        });
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  upper: {
    margin: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lower: {
    margin: 25,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const AppNavigator = createStackNavigator(
  {
    Main: MainComponent,
    PhotoSender : PhotoSenderComponent,
    Settings : SettingsComponent,
    SamplePolygon : SamplePolygon
  }
);

export default createAppContainer(AppNavigator);

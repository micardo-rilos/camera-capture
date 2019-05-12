import Svg,{ Rect } from 'react-native-svg';
import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

export default class SamplePolygon extends Component {

    static navigationOptions = {
        title: 'SamplePolygon',
    }

    render() {

        const photo = this.props.navigation.getParam('photo');
        const polyData = this.props.navigation.getParam('polyData');

        return (
            <ImageBackground style={styles.container} source={{ uri : photo.uri }}>
                <View>
                    <Svg 
                        width = { polyData.svgW }
                        height = { polyData.svgH }
                    >
                    <Rect 
                        x = { polyData.x }
                        y = { polyData.y }
                        width = { polyData.width }
                        height = { polyData.height }
                        stroke="red" 
                        strokeWidth="2" 
                        fill="transparent"/>
                    </Svg>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch"
    }
});
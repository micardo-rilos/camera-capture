import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


class SettingHeader extends Component {
  
  render() {

    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{this.props.text}</Text>
      </View>
    );
  }
}

class SettingComponent extends Component {
  
  render() {

    return (
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.settingContainer}>
            <Icon name={this.props.iconName} type={this.props.iconType} color='grey' size={37}/>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingMainText}>{this.props.mainText}</Text>
              <Text style={styles.settingSubText}>{this.props.subText}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 8
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },

  settingContainer: {
    marginBottom: 8,
    paddingLeft: 8,
    flexDirection: 'row'
  },
  settingTextContainer: {
    flexDirection: 'column',
    paddingLeft: 12,
  },
  settingMainText: {
    fontSize: 15,
    color: 'black'
  },
  settingSubText: {
    fontSize: 12
  }
});

export { SettingComponent, SettingHeader }
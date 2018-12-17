import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { Icon } from "native-base";

export default class MainScreen extends Component {
  static navigationOptions = {
        title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> MainScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

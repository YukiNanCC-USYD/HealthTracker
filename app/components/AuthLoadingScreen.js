import React, { Component } from 'react';
// import { Fonts } from '../../src/utils/Fonts'
import {
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


export default class AuthLoadingScreen extends React.Component{
  constructor(props) {
    super(props);
    this._loadData;
  }
  render() {
    return(
      <View style={styles.container}>
      <ActivityIndicator/>
      <StatusBar barStyle='dark-content' />
    </View>
    );
  }
  _loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    this.props.navigation.navigate(isLoggedIn !== "1" ? "Auth" : "App");
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
})

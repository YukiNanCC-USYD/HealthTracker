import React, { Component } from 'react';
import { Fonts } from '../../src/utils/Fonts'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  // Button,
  StatusBar,
  Image,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from 'react-native-splash-screen';
// const sleep = require('es6-sleep').promise;
import { 
  Container, 
  Header,
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon,
  Item,
  Label,
  Form,
  Input,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';

export default class PersonalScreen extends React.Component {
  render() {
    return(
      <>
      <StatusBar barStyle = 'dark-content' />
      <SafeAreaView>
        <ScrollView 
          contentInsetAdjustmentBehavior = 'automatic'
          style = {styles.scrollView}>
            <Container>
              <Content>

              </Content>
            </Container>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  massagefont: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.lightsteelblue,
    fontFamily: Fonts.Cochin
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 50,
    color: Colors.black,
    fontFamily: Fonts.DancingScript
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  btn:{
    marginLeft:50,
    marginTop:50,
    width:100,
    height:100,
    backgroundColor:'#18B4FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
  }
})

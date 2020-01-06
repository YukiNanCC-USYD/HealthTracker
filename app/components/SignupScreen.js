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

export default class SignUpScreen extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        emailcheck: '',
        setpassword: ''
      }
    }
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
                <Text style = {styles.welcome}> Create Your Tracker Account </Text>
                <Form>
                  <Item inlineLabel style={{marginTop:10}}>
                    <Label> Email Address </Label>
                    <Input onChangeText={(email)=>this.setState({email})} 
                           value={this.state.email} />
                  </Item>
                  <Item inlineLabel style={{marginTop:10}}>
                    <Label> Confirm Email Address </Label>
                    <Input onChangeText={(emailcheck)=>this.setState({emailcheck})} 
                           value={this.state.emailcheck} />
                  </Item>
                  <Item inlineLabel style={{marginTop:10}}>
                    <Label> Password </Label>
                    <Input secureTextEntry
                           onChangeText={(setpassword)=>this.setState({setpassword})} 
                           value={this.state.setpassword} />
                  </Item>
                </Form>
                <View>
                  <Button block info style={{marginTop:50,justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Personal')} >
                    <Text> Create Account </Text>
                  </Button>
                </View>
                <Text style={{marginTop:80, textAlign:'center', fontStyle: 'italic', color: '#66b2ff'}}>Already have account?</Text>
                <Button transparent style={{marginTop:10,justifyContent:'center',color:'#fa1faa'}} onPress={()=>this.props.navigation.navigate('LogIn')} > 
                  <Text>Login to your account</Text>
                </Button>
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
    welcome: {
      fontSize: 40,
      textAlign: 'center',
      margin: 50,
      color: Colors.black,
      fontFamily: Fonts.DancingScript
    }
  });
  
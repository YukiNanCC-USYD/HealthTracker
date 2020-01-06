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


const userInfo = {username: '111', password: '111'}

export default class LogInScreen extends React.Component{
    static navigationOptions= {
      // header: null,
      headerBackTitle: 'Back'
    }
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      }
    }
    render() {
      return(
        <>
        <StatusBar barStyle = 'dark-content'/>
        <SafeAreaView>
          <ScrollView>
            <Container>
              <Content>
              <Text style = {styles.welcome}> Log in to your account </Text>
                <Form style={{marginTop:20,justifyContent:'center'}}>
                  <Item floatingLabel>
                    <Label> Username </Label>
                    <Input onChangeText={(username)=>this.setState({username})} 
                           value={this.state.username} 
                           autoCapitalize ='none' />
                  </Item>
                  <Item floatingLabel>
                    <Label> Password </Label>
                    <Input secureTextEntry
                           onChangeText={(password)=>this.setState({password})} 
                           value={this.state.password} />
                  </Item>
                </Form>
                <Button block info style={{marginTop:50,justifyContent:'center'}} onPress={this._login}>
                  <Text>Log In</Text>
                </Button>
                <Text style={{marginTop:80, textAlign:'center', fontStyle: 'italic', color: '#66b2ff'}}> Are you a new user of Health Tracker? </Text>
                <Button transparent style={{marginTop:10,justifyContent:'center',color:'#fa1faa'}} onPress={()=>this.props.navigation.navigate('SignUp')}>
                  <Text>Create your account</Text>
                </Button>
              </Content>
            </Container>
          </ScrollView>
        </SafeAreaView>
        </>
      );
    }
    _login = async() => {
      if (userInfo.username === this.state.username && userInfo.password === this.state.password){
        await AsyncStorage.setItem('isLoggedIn', '1')
        this.props.navigation.navigate('Home')
      }else{
        alert("Username or Password is incorrect!")
      }
    }
  }

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
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
  });
  
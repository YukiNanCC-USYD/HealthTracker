/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Fonts } from './src/utils/Fonts'
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
  KeyboardAvoidingView,
  TouchableOpacity, 
  AppRegistry
} from 'react-native';

import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import SplashScreen from 'react-native-splash-screen';
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

import { createAppContainer, createSwitchNavigator, DrawerNavigator, ThemeColors } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import {createDrawerNavigator } from 'react-navigation-drawer';

import { extend } from 'dayjs';

import WelcomeScreen from './App/Components/WelcomeScreen';
// import LogInScreen from './App/Components/LoginScreen';
// import SignUpScreen from './App/Components/SignupScreen';
// import HomeScreen from './App/Components/HomeScreen';


const userInfo = {username: '111', password: '111'}

// class WelcomeScreen extends React.Component{
//   static navigationOptions = {
//     header: null,
//     headerBackTitle: 'Back', // <-- set back button text
//   }
//   render() {
//     return (
//       <>
//         <StatusBar barStyle = 'dark-content' />
//         <SafeAreaView> 
//           <ScrollView
//             contentInsetAdjustmentBehavior = 'automatic'
//             style = {styles.scrollView}>
//             <Container>
//               <Content>
//                 <Text style = {styles.welcome}> Health Tracker </Text>
//                 <Image source={{uri:'https://www.42gears.com/wp-content/uploads/2019/01/Future-of-Mobility-Solutions-in-Healthcare-industry-Banner.png'}} style={{height: 200, width: 415, flex: 1, marginTop:20}} />
//                 <View style = {{flexDirection:'row', flex: 1, position: 'absolute', bottom: -320, left: -10, right: -10, justifyContent: 'space-around', padding:10}}>
//                   <Button block info onPress={()=>this.props.navigation.navigate('LogIn')}>
//                     <Text>                   Login                   </Text>
//                   </Button>
//                   <Button block info onPress={()=>this.props.navigation.navigate('SignUp')}>
//                     <Text>                   Signup                  </Text>
//                   </Button>
//                 </View>
//               </Content>
//             </Container>
//           </ScrollView>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

class LogInScreen extends React.Component{
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
  // componentDidMount() {
  //   this._loadInitialState().done()
  // }
  // _loadInitialState =async () => {
  //   var value = await AsyncStorage.getItem('user');
  //   if (value !== null) {
  //     this.props.navigation.navigate('Home');
  //   }
  // }
  render() {
    return(
      <>
      <StatusBar barStyle = 'dark-content'/>
      <SafeAreaView>
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
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
        </KeyboardAvoidingView>
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

class SignUpScreen extends React.Component{
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

class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
      title: 'Health Tracker',
      headerStyle: {
        backgroundColor: '#87cefa'
      },
      headerRight: () => (
        <Button transparent style={{textAlign: 'right', right: 20}} onPress={()=>this.props.navigation.navigate('Welcome')}>
          <Text>Log Out</Text>
        </Button>
      ),
      headerLeft: () => (
        <Button transparent style={{textAlign:'left', left: 20}} onPress = {() => this.props.navigation.navigate.toggleDrawer()} >
          {/* <Text> Menu </Text> */}
          <Icon name='menu'/>
        </Button>
      ),
      headerBackTitle: 'Home',
      drawerLabel: 'Menu',
      drawerIcon: ({tintColor}) => (
        <Image 
          source ={{uri: 'http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-2-icon.png'}}
        />
      ),
  };
  // _logout = async() => {
  //   alert('sss');
  //   await AsyncStorage.clear();
  //   alert('ssss');
  //   this.props.navigation.navigate("Auth");
  // }

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
              <Card style={{flex: 0}}>
                <CardItem header bordered>
                  <Left>
                    <Thumbnail source={{uri: 'http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-2-icon.png'}} />
                    <Body>
                      <Text>EKG Recordings</Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Image source={{uri: 'https://www.mindtecstore.com/media/image/product/142/lg/alivecor-kardia-mobile-ecg-heart-monitor~2.jpg'}} style={{height: 200, width: 380, flex: 1, justifyContent: 'center'}}/>
                    {/* <Text>
                      Recording your EKG
                    </Text> */}
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Left>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Historical Readings</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Add a New Readings</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem header bordered>
                  <Left>
                    <Thumbnail source={{uri: 'http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-2-icon.png'}} />
                    <Body>
                      <Text>Blood Pressure Recordings</Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/61dbPzoF8mL.jpg'}} style={{height: 200, width: 380, flex: 1, justifyContent: 'center'}}/>
                    {/* <Text>
                      Recording your EKG
                    </Text> */}
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Left>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Historical Readings</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Add a New Readings</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem header bordered>
                  <Left>
                    <Thumbnail source={{uri: 'http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-2-icon.png'}} />
                    <Body>
                      <Text>Step Pressure Recordings</Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Image source={{uri: 'https://images.yourstory.com/cs/wordpress/2014/11/stridalyzer1.jpg?fm=png&auto=format'}} style={{height: 200, width: 380, flex: 1, justifyContent: 'center'}}/>
                    {/* <Text>
                      Recording your EKG
                    </Text> */}
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Left>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Historical Readings</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button transparent block textStyle={{color: '#87838B', justifyContent: 'left'}} onPress={()=>this.props.navigation.navigate('EKG')} >
                      <Text> Add a New Readings</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
              <Button onPress={this._logout} >
                <Text>Log out</Text>
              </Button>
              {/* <Button onPress={()=>this.props.navigation.toggleDrawer} >
                <Text>Open Drawer</Text>
              </Button> */}
              {/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('CKG')}>
                <View style={{marginLeft:50, marginTop:50, width:100, height:100, backgroundColor:'#18B4FF', justifyContent:'center', alignItems:'center', borderRadius:50,}}>
                  <Text style={{fontSize:16, color:'#fff'}}>CKG Recording</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('BP')}>
                <View style={{marginLeft:50, marginTop:50, width:100, height:100, backgroundColor:'#18B4FF', justifyContent:'center', alignItems:'center', borderRadius:50,}}>
                  <Text style={{fontSize:16, color:'#fff'}}>Blood Pressure</Text>
                </View>
              </TouchableOpacity> */}
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }
  _logout = async() => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  }
}

class EKGScreen extends React.Component{
  render() {
    return(
      <SafeAreaView>

      </SafeAreaView>
    );
  }
}

class BPScreen extends React.Component{
  render() {
    return(
      <SafeAreaView>

      </SafeAreaView>
    );
  }
}

class AuthLoadingScreen extends React.Component{
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

class PersonalScreen extends React.Component {
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

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Personal: {
    screen: PersonalScreen,
  },
});

const AuthStack = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  LogIn: LogInScreen,
  SignUp: SignUpScreen,
})

const AppStack = createStackNavigator(
  {
    Welcome: {screen: WelcomeScreen},
    Home: HomeScreen,
    Personal: PersonalScreen,
    EKG: EKGScreen,
    BP: BPScreen
  })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  ),
  createDrawerNavigator(
    {
      MyDrawerNavigator
    }

  )
);

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
});

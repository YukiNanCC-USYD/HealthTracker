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

export default class HomeScreen extends React.Component{
    constructor(props) {
      super(props);
    }
     static navigationOptions = ({navigation}) => {
       return {
         title: 'Health Tracker_11',
         headerStyle: {
          backgroundColor: '#87cefa'
        },
        headerRight: ()=> (
          <Button transparent style={{textAlign: 'right', right: 20}} onPress={ navigation.getParam('logout')}>
            <Text>Log out</Text>
          </Button>
        )
       };
     };
     componentWillMount() {
       this.props.navigation.setParams({logout: this._logout});
     }
    // static navigationOptions =  {
    //     title: 'Health Tracker',
    //     headerStyle: {
    //       backgroundColor: '#87cefa'
    //     },
    //     headerRight: () => (
    //       <Button transparent style={{textAlign: 'right', right: 20}} onPress={()=>this.props.navigation.navigate('Welcome')}>
    //         <Text>Log Out</Text>
    //       </Button>
    //     ),
    //     headerLeft: () => (
    //       <Button transparent style={{textAlign:'left', left: 20}} onPress = {() => this.props.navigation.navigate.toggleDrawer()} >
    //         {/* <Text> Menu </Text> */}
    //         <Icon name='menu'/>
    //       </Button>
    //     ),
    //     headerBackTitle: 'Home',
    //     drawerLabel: 'Menu',
    //     drawerIcon: ({tintColor}) => (
    //       <Image 
    //         source ={{uri: 'http://icons.iconarchive.com/icons/graphicloads/medical-health/256/heart-beat-2-icon.png'}}
    //       />
    //     ),
    // };
    _logout = async() => {
      // alert('sss');
      await AsyncStorage.clear();
      // alert('ssss');
      this.props.navigation.navigate("Auth");
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
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Image source={{uri: 'https://images.yourstory.com/cs/wordpress/2014/11/stridalyzer1.jpg?fm=png&auto=format'}} style={{height: 200, width: 380, flex: 1, justifyContent: 'center'}}/>
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
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
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

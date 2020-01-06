import React, { Component } from 'react';
import { Fonts } from '../../src/utils/Fonts'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { 
  Container, 
  Content, 
  Button, 
} from 'native-base';

export default class WelcomeScreen extends React.Component{
  static navigationOptions = {
    header: null,
    headerBackTitle: 'Back', // <-- set back button text
  }
  render() {
    return (
      <>
        <StatusBar barStyle = 'dark-content' />
        <SafeAreaView> 
          <ScrollView
            contentInsetAdjustmentBehavior = 'automatic'
            style = {styles.scrollView}>
            <Container>
              <Content>
                <Text style = {styles.welcome}> Health Tracker </Text>
                <Image source={{uri:'https://www.42gears.com/wp-content/uploads/2019/01/Future-of-Mobility-Solutions-in-Healthcare-industry-Banner.png'}} style={{height: 200, width: 415, flex: 1, marginTop:20}} />
                <View style = {{flexDirection:'row', flex: 1, position: 'absolute', bottom: -320, left: -10, right: -10, justifyContent: 'space-around', padding:10}}>
                  <Button block info onPress={()=>this.props.navigation.navigate('LogIn')}>
                    <Text>                   Login                   </Text>
                  </Button>
                  <Button block info onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <Text>                   Signup                  </Text>
                  </Button>
                </View>
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
})

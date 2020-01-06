import { createAppContainer, createSwitchNavigator, DrawerNavigator, ThemeColors } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import WelcomeScreen from './app/components/WelcomeScreen';
import LogInScreen from './app/components/LoginScreen';
import SignUpScreen from './app/components/SignupScreen';
import HomeScreen from './app/components/HomeScreen';
import PersonalScreen from './app/components/PersonalScreen';
import AuthLoadingScreen from './app/components/AuthLoadingScreen';
import EKGScreen from './app/components/EKGScreen';
import BPScreen from './app/components/BPScreen';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  LogIn:  LogInScreen,
  SignUp: SignUpScreen
});

const AppStack = createStackNavigator ({
  Welcome: WelcomeScreen,
  Home: HomeScreen,
  Personal: PersonalScreen,
  EKG: EKGScreen,
  BP: BPScreen
})

const MyDrawerNavigator = createDrawerNavigator({
  Home:  HomeScreen,  
  Personal:  PersonalScreen,
});

const Application = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },{
      initialRouteName: 'Auth'
    }
  ),
  createDrawerNavigator(
    {
      MyDrawerNavigator
    }
  )
)

export default Application






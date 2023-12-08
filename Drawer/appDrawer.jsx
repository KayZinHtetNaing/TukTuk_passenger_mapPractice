import React from 'react';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import InputPhScreen from '../screens/InputPhScreen';
import OtpNoScreen from '../screens/OtpNoScreen';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Call" component={CallScreen} />
       <Drawer.Screen name="Chat" component={ChatScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
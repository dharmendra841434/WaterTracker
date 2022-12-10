import {View, Text} from 'react-native';
import React from 'react';
import AddScreen from '../screens/AddScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Spalsh"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Bottom" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GoalScreen from '../screens/GoalScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import StackNavigation from './StackNavigation';
import AddScreen from '../screens/AddScreen';

const Tab = createBottomTabNavigator();
function TabBarIcon({...props}) {
  return <Icon size={30} style={{marginBottom: -3}} {...props} />;
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Add"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 3,
          fontWeight: '500',
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: Colors.accentColorBlue,
      }}>
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              color={focused ? Colors.accentColorBlue : 'gray'}
              name={Platform.OS === 'android' ? 'md-water' : 'ios-journal'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Goal"
        component={GoalScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon
              name="md-water"
              color={focused ? Colors.accentColorBlue : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

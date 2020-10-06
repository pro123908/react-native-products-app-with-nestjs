import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const StackNavigator = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNavigator.Navigator headerMode={false}>
      {true ? (
        <>
          <StackNavigator.Screen
            name="Home"
            component={HomeScreen}></StackNavigator.Screen>
        </>
      ) : (
        <>
          <StackNavigator.Screen
            name="Login"
            options={{
              animationTypeForReplace: true ? 'pop' : 'push',
            }}
            component={SignUpScreen}></StackNavigator.Screen>
          <StackNavigator.Screen
            name="SignUp"
            component={SignUpScreen}></StackNavigator.Screen>
        </>
      )}
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;

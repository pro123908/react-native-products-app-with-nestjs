import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from '../screensX/HomeScreen';
import AboutScreen from '../screensX/AboutScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Stack"
        component={StackNavigator}></RootStack.Screen>
      <RootStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{headerShown: false}}></RootStack.Screen>
    </RootStack.Navigator>
  );
};

const ModalScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>ModalScreen</Text>
    <Button title="Dismiss Modal" onPress={() => navigation.goBack()} />
  </View>
);

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 25,
        },
      }}
      // initialRouteName="About" screenOptions={{title: 'Screen'}}
    >
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
      ></Stack.Screen>
      <Stack.Screen
        name="About"
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
        // options={{title: 'About Screen'}}
        options={({route}) => ({
          title: route.params.title ? route.params.title : 'About Screen',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: (props) => (
            <View {...props}>
              <Text>Custom component title</Text>
            </View>
          ),
          headerRight: () => (
            <Button
              title="RightHeader"
              onPress={() => alert('This is a button!')}
            />
          ),
          headerLeft: (props) => <HeaderBackButton {...props} />,
        })}
        component={AboutScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

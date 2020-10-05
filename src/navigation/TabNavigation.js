import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Messages from '../screens/Messages';
import Feed from '../screens/Feed';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigator';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="messages" component={Messages}></Tabs.Screen>
      <Tabs.Screen name="Feed" component={Feed}></Tabs.Screen>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{itemId: 100, desc: 'Item 100'}} //default params
      ></Tabs.Screen>
      <Tabs.Screen name="Drawer" component={DrawerNavigator}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});

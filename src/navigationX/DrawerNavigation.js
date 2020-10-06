import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Messages from '../screens/Messages';
import Feed from '../screens/Feed';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Messages" component={Messages}></Drawer.Screen>
      <Drawer.Screen name="Feed" component={Feed}></Drawer.Screen>
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});

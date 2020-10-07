import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './store';
import {GET_PRODUCTS, LOGIN_USER} from './actions/actionType';
import AsyncStorage from '@react-native-community/async-storage';

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('xord-user');

    if (user !== null) {
      return user;
    }
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
};

getUser().then((user) => {
  console.log('user inside => ', user);
  if (user) {
    store.dispatch({
      type: LOGIN_USER,
      payload: JSON.parse(user),
    });
  }
});

const readData = async () => {
  try {
    const products = await AsyncStorage.getItem('products');

    if (products !== null) {
      return products;
    }
  } catch (e) {
    alert('Failed to fetch the data from storage');
  }
};

store.getState().auth.accessToken
  ? readData().then((products) => {
      store.dispatch({
        type: GET_PRODUCTS,
        payload: products ? JSON.parse(products) : [],
      });
    })
  : '';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './store';
import {GET_PRODUCTS, LOGIN_USER} from './actions/actionType';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
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
    setIsLoading(false);
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

  // store.getState().auth.accessToken
  //   ? readData().then((products) => {
  //       store.dispatch({
  //         type: GET_PRODUCTS,
  //         payload: products ? JSON.parse(products) : [],
  //       });
  //     })
  //   : '';

  const [isLoading, setIsLoading] = useState(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoading ? (
          <ActivityIndicator
            style={styles.loader}
            color="#1363bc"
            size={'large'}
          />
        ) : (
          <StackNavigator />
        )}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  loader: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

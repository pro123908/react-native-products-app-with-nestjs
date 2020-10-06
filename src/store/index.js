import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {GET_PRODUCTS, LOGIN_USER, SET_AUTH_TOKEN} from '../actions/actionType';
import {handleInAndOutFromLocalStorage} from '../utils/LocalStorage';
import AsyncStorage from '@react-native-community/async-storage';

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch({
//   type: SET_AUTH_TOKEN,
//   payload: handleAccessTokenInLocalStorage("ACCESS_TOKEN"),
// });

// let currentUser = handleUserInLocalStorage("xord-user");
// if (currentUser) {
//   store.dispatch({
//     type: LOGIN_USER,
//     payload: handleUserInLocalStorage("xord-user"),
//   });
// }

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

export default store;

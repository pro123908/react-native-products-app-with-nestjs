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

export default store;

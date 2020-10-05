import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import {
  GET_PRODUCTS,
  LOGIN_USER,
  SET_AUTH_TOKEN,
} from "../actions/actionType";
import {
  handleAccessTokenInLocalStorage,
  handleInAndOutFromLocalStorage,
  handleUserInLocalStorage,
} from "../utils/LocalStorage";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// store.dispatch({
//   type: SET_AUTH_TOKEN,
//   payload: handleAccessTokenInLocalStorage("ACCESS_TOKEN"),
// });

let currentUser = handleUserInLocalStorage("xord-user");
if (currentUser) {
  store.dispatch({
    type: LOGIN_USER,
    payload: handleUserInLocalStorage("xord-user"),
  });
}

let products = handleInAndOutFromLocalStorage("products");

store.dispatch({
  type: GET_PRODUCTS,
  payload: products ? products : [],
});
export default store;

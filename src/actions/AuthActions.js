import axios from 'axios';
import {
  clearLocalStorage,
  handleUserInLocalStorage,
} from '../utils/LocalStorage';
import {
  CLEAR_REGISTRATION_ERROR,
  LOGIN_USER,
  REQUEST_ERROR,
  SIGN_UP_USER,
  LOGOUT_USER,
} from './actionType';

export const loginUser = (email, password, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://192.168.18.226:3000/users/login',
        {
          email,
          password,
        },
      );

      console.log(response.data);
      // handleAccessTokenInLocalStorage(
      //   "ACCESS_TOKEN",
      //   response.data.accessToken
      // );
      handleUserInLocalStorage('xord-user', response.data);
      dispatch({type: LOGIN_USER, payload: response.data});
      history.push('/home');
    } catch (error) {
      console.log(error.response.data);
      dispatch({type: REQUEST_ERROR, payload: error.response.data});
    }
  };
};

export const registerUser = (name, email, password, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://192.168.18.226:3000/users', {
        name,
        email,
        password,
      });

      console.log(response.data);
      // handleAccessTokenInLocalStorage(
      //   "ACCESS_TOKEN",
      //   response.data.accessToken
      // );
      dispatch({type: SIGN_UP_USER, payload: response.data});

      history.push('/login');
    } catch (error) {
      console.log(error.response.data);
      dispatch({type: REQUEST_ERROR, payload: error.response.data});
    }
  };
};

export const CheckProtected = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'http://192.168.18.226:3000/users/protected',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearRegistrationError = () => {
  return async (dispatch) => {
    dispatch({type: CLEAR_REGISTRATION_ERROR});
  };
};

export const logoutUser = (history) => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER});
    clearLocalStorage('xord-user');
    history.push('/login');
  };
};

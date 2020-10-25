import axios from 'axios';
import {ipAddress} from '../config';
import {
  clearLocalStorage,
  handleInAndOutFromLocalStorage,
} from '../utils/LocalStorage';
import {
  CLEAR_REGISTRATION_ERROR,
  LOGIN_USER,
  REQUEST_ERROR,
  SIGN_UP_USER,
  LOGOUT_USER,
  SET_AUTH_LOADING,
  GET_PRODUCTS,
} from './actionType';

export const loginUser = (userEmail, password) => {
  return async (dispatch) => {
    setLoading(true);
    console.log('Inside loginUser');
    try {
      const response = await axios.post(`${ipAddress}/users/login`, {
        email: userEmail,
        password,
      });

      console.log('Login User', response.data);
      // handleAccessTokenInLocalStorage(
      //   "ACCESS_TOKEN",
      //   response.data.accessToken
      // );

      const {accessToken, email, name, products, image} = response.data;
      handleInAndOutFromLocalStorage('xord-user', {
        accessToken,
        email,
        name,
        image,
      });
      dispatch({type: LOGIN_USER, payload: {accessToken, email, name, image}});
      dispatch({type: GET_PRODUCTS, payload: products});
      // navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      dispatch({type: REQUEST_ERROR, payload: error.response.data});
    }
  };
};

export const registerUser = (name, email, password, cloudData, navigation) => {
  return async (dispatch) => {
    try {
      let cloudResponse = await fetch(
        'https://api.cloudinary.com/v1_1/xord/upload',
        {
          body: JSON.stringify(cloudData),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        },
      );

      let dataJSON = await cloudResponse.json();
      const response = await axios.post(`${ipAddress}/users`, {
        name,
        email,
        password,
        image: dataJSON.url,
      });
      console.log(response.data);
      // handleAccessTokenInLocalStorage(
      //   "ACCESS_TOKEN",
      //   response.data.accessToken
      // );
      dispatch({type: SIGN_UP_USER, payload: response.data});
      navigation.navigate('Login');
    } catch (error) {
      console.log(error.response.data);
      dispatch({type: REQUEST_ERROR, payload: error.response.data});
    }
  };
};

export const CheckProtected = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ipAddress}/users/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

export const logoutUser = (navigation) => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER});

    clearLocalStorage('xord-user');
  };
};

export const setLoading = (loading) => ({
  type: SET_AUTH_LOADING,
  payload: loading,
});

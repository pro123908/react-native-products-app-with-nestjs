import axios from 'axios';
import {ipAddress} from '../config';
import {handleInAndOutFromLocalStorage} from '../utils/LocalStorage';

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  SET_LOADING,
  REQUEST_ERROR,
} from './actionType';

export const getProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ipAddress}/products/${productId}`);

      console.log(response.data);

      dispatch({type: GET_PRODUCT, payload: response.data});
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${ipAddress}/products`);
      console.log('Inside');
      console.log('Data came?', response.data);

      dispatch({type: GET_PRODUCTS, payload: response.data});
      handleInAndOutFromLocalStorage('products', response.data);
    } catch (error) {
      console.log('error =>', error);
      if (error.response?.data) {
        dispatch({type: REQUEST_ERROR, payload: error.response.data});
      } else {
        console.log('SERVER ERROR!!!');
      }
    }
  };
};

export const addProduct = (email, title, description, price) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      try {
        const response = await axios.post(`${ipAddress}/products`, {
          email,
          title,
          description,
          price,
        });

        console.log(response.data);

        dispatch({type: ADD_PRODUCT, payload: response.data});
      } catch (error) {
        console.log(error.response.data);
        // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
      }
    }, 1000);
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      try {
        const response = await axios.delete(
          `${ipAddress}/products/${productId}`,
        );

        console.log(response.data);

        dispatch({type: DELETE_PRODUCT, payload: productId});
      } catch (error) {
        console.log(error.response.data);
        // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
      }
    }, 1000);
  };
};

export const updateProduct = (productId, fieldsToBeUpdated) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${ipAddress}/products/${productId}`,
        fieldsToBeUpdated,
      );

      console.log(response.data._id);

      dispatch({type: UPDATE_PRODUCT, payload: response.data});
    } catch (error) {
      console.log(error.response.data);
      // dispatch({ type: REQUEST_ERROR, payload: error.response.data });
    }
  };
};

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  SET_LOADING,
  UPDATE_PRODUCT,
} from '../actions/actionType';

const initialState = {
  product: {},
  products: [],
  error: {},
  loading: false,
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
        loading: false,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload._id ? action.payload : product;
        }),
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

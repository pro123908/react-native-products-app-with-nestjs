import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { ProductsReducer } from "./ProductsReducer";
import Reducer2 from "./Reducer2";

const rootReducer = combineReducers({
  auth: AuthReducer,
  products: ProductsReducer,
  Reducer2,
});

export default rootReducer;

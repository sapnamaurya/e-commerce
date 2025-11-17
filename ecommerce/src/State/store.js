import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./Auth/Reducer";
// import thunk from 'redux-thunk';
// import { authReducer } from '../customer/Redux/Auth/Reducer';
// import { productReducer } from '../customer/Redux/Products/Reducer';
// import { cartReducer } from '../customer/Redux/Cart/Reducer';
const rootReducers = combineReducers({
  auth: authReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

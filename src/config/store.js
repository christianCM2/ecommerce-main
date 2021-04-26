import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./index";
import login from '../components/redux/reducers/LoginReducers'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "login",   
  ],
};
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(
  persistedReducer
  ,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;

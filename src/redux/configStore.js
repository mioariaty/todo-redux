import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import {persistStore, persistReducer} from 'redux-persist'
import rootReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
}

const isDev = process.env.NODE_ENV === "development";
const reducers = persistReducer(persistConfig, combineReducers(rootReducers));
const middlewares = [thunk];
if(isDev) middlewares.push(logger);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
)

const persistor = persistStore(store);

export {store, persistor}

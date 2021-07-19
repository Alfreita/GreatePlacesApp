import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavContainer from "./navigation/MainNavigation";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import placesReducers from "./store/reducer/placesReducers";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("db initialized");
  })
  .catch((err) => {
    console.log("db failed");
    console.log(err);
  });
const rootReducer = combineReducers({
  places: placesReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
}

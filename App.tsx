import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavContainer from "./navigation/MainNavigation";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import placesReducers from "./store/reducer/placesReducers";

const rootReducer = combineReducers({
  places: placesReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      return <NavContainer />;
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

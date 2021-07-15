import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import Color from "../constants/Color";


const PlacesStackNavigator = createStackNavigator();

const defaultHeaderStyle = () => {
  return {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primary,
    // headerTitleStyle: {
    //   fontFamily: "open-sans-bold",
    // },
  };
};
const placesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator
      screenOptions={defaultHeaderStyle}
      initialRouteName="PlacesList"
    >
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Map" }}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "New Place" }}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Place Detail" }}
      />
      <PlacesStackNavigator.Screen
        name="PlacesList"
        component={PlacesListScreen}
        options={{
          title: "All places",
        }}
      />
    </PlacesStackNavigator.Navigator>
  );
};

const NavContainer = () => {
  return <NavigationContainer>{placesNavigator()}</NavigationContainer>;
};
export default NavContainer;

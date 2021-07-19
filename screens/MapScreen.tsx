import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props: any) => {
  const mapRegion = {
    latitude: 37.7,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} region={mapRegion} />;
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;

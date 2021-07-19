import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = (props: any) => {
  const [selectedLocation, setSeletecedLocation] = useState<any>();
  const mapRegion = {
    latitude: 37.7,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectedPlace = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSeletecedLocation({ latitude, longitude });
  };
  return (
    <MapView style={styles.map} region={mapRegion} onPress={selectedPlace}>
      {selectedLocation ? (
        <Marker title="picked location" coordinate={selectedLocation} />
      ) : null}
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;

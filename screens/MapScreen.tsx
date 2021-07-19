import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, StyleSheet, Text, Platform, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderCustomButtom";

const MapScreen = (props: any) => {
  const [selectedLocation, setSeletecedLocation] = useState<any>();
  const { navigation } = props;
  const { setLocation } = props.route.params;
  const mapRegion = {
    latitude: 37.7,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectedPlace = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const setlatlong = { latitude, longitude };
    setSeletecedLocation(setlatlong);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add places"
            iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
            onPress={() => {
              if (selectedLocation) {
                setLocation(selectedLocation);
                navigation.goBack();
              } else {
                Alert.alert("ops", "please pick a place", [{ text: "okay" }]);
              }
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedLocation, setLocation]);
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

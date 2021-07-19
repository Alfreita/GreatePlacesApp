import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Color from "../constants/Color";
import * as Location from "expo-location";
import MapPreview from "./MapPreview";

const LocationPicker = (props: any) => {
  const [pickedLocation, setPickedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("You've refused to allow this appp to access your location!");
        return;
      }
      setIsLoading(true);
      let location = await Location.getCurrentPositionAsync({});
      setIsLoading(false);
      const latlng = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
      setPickedLocation(latlng);
      console.log(pickedLocation);
    } catch (error) {
      alert("An error occurred, please try again");
      setIsLoading(false);
    }
  };
  const pickOnMap = async () => {
    props.navigation.navigate({ name: "Map" });
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {pickedLocation.lat !== 0 || pickedLocation.lng !== 0 ? (
          <MapPreview location={pickedLocation} />
        ) : (
          <Text>No location chosen yet!!!</Text>
        )}
      </View>
      <View style={styles.buttonView}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Color.primary} />
        ) : (
          <Button
            title="Get User location"
            onPress={handleUserLocation}
            color={Color.primary}
          />
        )}
        <Button
          title="Pick a place"
          onPress={pickOnMap}
          color={Color.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 250,
    borderColor: "#CCC",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
export default LocationPicker;

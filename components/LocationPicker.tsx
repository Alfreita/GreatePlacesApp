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

const LocationPicker = (props: any) => {
  const [pickedLocation, setPickedLocation] = useState({});
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
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      alert("An error occurred, please try again");
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>No location chosen yet</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Color.primary} />
      ) : (
        <Button
          title="Get User location"
          onPress={handleUserLocation}
          color={Color.primary}
        />
      )}
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
    height: "150",
    borderColor: "#CCC",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LocationPicker;

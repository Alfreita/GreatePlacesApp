import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import Color from "../constants/Color";

const PlaceDetailScreen = (props: any) => {
  const { placeId, placeTitle } = props.route.params;
  const selectedPlace = useSelector((state: any) =>
    state.places.places.find((place: any) => place.id === placeId)
  );
  const { navigation } = props;
  useLayoutEffect(() => {
    console.log(props);
    navigation.setOptions({
      title: placeTitle === "" ? "No title" : placeTitle,
    });
  }, [placeTitle]);
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", flex: 1 }}>
      <Image source={{ uri: selectedPlace.imageUrl }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapPreview
          location={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  locationContainer: {
    marginTop: 20,
    marginBottom: 10,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Color.primary,
    textAlign: "center",
  },
  mapContainer: {
    height: 250,
    width: "90%",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 2,
  },
});

export default PlaceDetailScreen;

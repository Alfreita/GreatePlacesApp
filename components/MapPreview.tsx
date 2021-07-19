import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ENV from "../env";
const MapPreview = (props: any) => {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleAPIKey}`;
  return (
    <View style={styles.mapPreview}>
      <Image
        style={styles.image}
        source={{
          uri: imagePreview,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;

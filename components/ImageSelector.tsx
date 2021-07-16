import React from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Color from "../constants/Color";

const ImagePickerComponent = (props: any) => {
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (!result.granted) {
      Alert.alert("Opss", "You need to granted camera permission", [
        {
          text: "Okay",
        },
      ]);
      return false;
    }
    return true;
  };
  const TakeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    await ImagePicker.launchCameraAsync();
  };
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet</Text>
        <Image style={styles.image} />
      </View>
      <Button
        onPress={() => TakeImageHandler()}
        color={Color.primary}
        title="Take Image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: "200",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePickerComponent;

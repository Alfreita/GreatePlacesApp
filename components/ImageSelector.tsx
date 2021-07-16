import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Color from "../constants/Color";

const ImagePickerComponent = (props: any) => {
  const [imageUrl, setImageUlr] = useState("");
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setImageUlr(result.uri);
      props.setImage(result.uri);
    }
  };
  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImageUlr(result.uri);
      props.setImage(result.uri);
    }
  };

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imagePreview}>
        {imageUrl.length <= 0 ? (
          <Text>add an image</Text>
        ) : (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        )}
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={openCamera}
          color={Color.primary}
          title="Open camera"
        />
        <Button
          onPress={showImagePicker}
          color={Color.primary}
          title="Select an image"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: "100%",
    marginBottom: 15,
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  buttonView: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePickerComponent;

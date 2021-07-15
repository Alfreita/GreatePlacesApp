import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const PlaceDetailScreen = (props: any) => {
  const { image, title, address, onSelect } = props.route.params.title;
  const { navigation } = props.navigation;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title === "" ? "No title" : title,
    });
  }, [image, title, address, onSelect]);
  return (
    <View>
      <Text> Place detail</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlaceDetailScreen;
